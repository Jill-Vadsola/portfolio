/** Client-only, StrictMode-safe singleton frame preloader.
 *  Decodes every hero frame once (off the main thread via Image.decode) with a
 *  bounded concurrency window, and shares the decoded HTMLImageElements with the
 *  hero canvas. Idempotent: safe to call from a double-invoked effect. */

export type LoadState = { loaded: number; total: number; done: boolean };
type Sub = (s: LoadState) => void;

const MAX_IN_FLIGHT = 8;

const images: (HTMLImageElement | undefined)[] = [];
const ready: boolean[] = [];
const subs = new Set<Sub>();

let started = false;
let loaded = 0;
let total = 0;
let done = false;

function snapshot(): LoadState {
  return { loaded, total, done };
}

function notify() {
  const s = snapshot();
  subs.forEach((fn) => fn(s));
}

/** Begin loading `paths` once. Subsequent calls are no-ops (singleton). */
export function startLoading(paths: string[]) {
  if (started || typeof window === "undefined") return;
  started = true;

  total = paths.length;
  images.length = total;
  ready.length = total;

  let cursor = 0;

  const pump = () => {
    if (cursor >= total) return;
    const i = cursor++;
    const img = new Image();
    img.decoding = "async";

    const finish = () => {
      images[i] = img;
      ready[i] = true;
      loaded += 1;
      if (loaded >= total) done = true;
      notify();
      pump(); // free the slot, start the next
    };

    img.onerror = finish; // count failures so the gate can never hang
    img.src = paths[i];

    if (img.decode) {
      img
        .decode()
        .then(finish)
        .catch(() => {
          // Safari can reject decode() on otherwise-fine images.
          if (img.complete) finish();
          else img.onload = finish;
        });
    } else {
      img.onload = finish;
    }
  };

  for (let k = 0; k < Math.min(MAX_IN_FLIGHT, total); k++) pump();
  notify();
}

export function subscribe(fn: Sub): () => void {
  subs.add(fn);
  fn(snapshot());
  return () => {
    subs.delete(fn);
  };
}

/** Nearest already-decoded frame, so scrubbing never blanks mid-load. */
export function frameAt(idx: number): HTMLImageElement | undefined {
  if (idx < 0) idx = 0;
  else if (idx >= total) idx = total - 1;
  if (ready[idx]) return images[idx];
  for (let d = 1; d < total; d++) {
    if (idx - d >= 0 && ready[idx - d]) return images[idx - d];
    if (idx + d < total && ready[idx + d]) return images[idx + d];
  }
  return undefined;
}
