"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { profile } from "@/lib/data";
import {
  TOTAL_FRAMES,
  TOTAL_FRAMES_SM,
  framePath,
  framePathSm,
  isMobile,
  prefersReducedMotion,
} from "@/lib/frames";
import { startLoading, subscribe, frameAt } from "@/lib/frameLoader";

gsap.registerPlugin(ScrollTrigger);

const DPR_CAP = 2;
const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

export default function HeroCanvas() {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const hero = heroRef.current;
    if (!canvas || !stage || !hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const mobile = isMobile();
    const count = mobile ? TOTAL_FRAMES_SM : TOTAL_FRAMES;
    const path = mobile ? framePathSm : framePath;
    const FILL = mobile ? 1.06 : 1.0;

    // Mutable render state (never React state — no re-render on scroll).
    const state = { f: 0 };
    let dirty = true;
    let overrideImg: HTMLImageElement | null = null;

    function sizeCanvas() {
      const c = canvas as HTMLCanvasElement;
      const g = ctx as CanvasRenderingContext2D;
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      c.width = Math.max(1, Math.round(stage!.clientWidth * dpr));
      c.height = Math.max(1, Math.round(stage!.clientHeight * dpr));
      g.imageSmoothingEnabled = true;
      g.imageSmoothingQuality = "high";
      dirty = true;
    }

    function render() {
      const c = canvas as HTMLCanvasElement;
      const g = ctx as CanvasRenderingContext2D;
      g.clearRect(0, 0, c.width, c.height);
      const idx = Math.round(state.f * (count - 1));
      const img = overrideImg ?? frameAt(idx);
      if (!img) return;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;
      // contain-fit: whole figure always visible; dark plate feathers into the page.
      const scale = Math.min(c.width / iw, c.height / ih) * FILL;
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (c.width - dw) / 2;
      const dy = (c.height - dh) / 2;
      g.drawImage(img, dx, dy, dw, dh);
    }

    let raf = requestAnimationFrame(function loop() {
      if (dirty) {
        render();
        dirty = false;
      }
      raf = requestAnimationFrame(loop);
    });

    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);

    function setOverlay(p: number) {
      const introOut = clamp01(p / 0.34);
      if (introRef.current) {
        introRef.current.style.opacity = String(1 - introOut);
        introRef.current.style.transform = `translateY(${-26 * introOut}px)`;
      }
      const taglineIn = clamp01((p - 0.6) / 0.32);
      if (taglineRef.current) {
        taglineRef.current.style.opacity = String(taglineIn);
        taglineRef.current.style.transform = `translateY(${26 * (1 - taglineIn)}px)`;
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(1 - clamp01(p / 0.12));
      }
    }

    // ---- Reduced motion: static final frame, full overlay, no gate ----
    if (reduced) {
      state.f = 1;
      setProgress(1);
      setReady(true);
      if (introRef.current) {
        introRef.current.style.opacity = "1";
        introRef.current.style.transform = "none";
      }
      if (taglineRef.current) {
        taglineRef.current.style.opacity = "1";
        taglineRef.current.style.transform = "none";
      }
      if (hintRef.current) hintRef.current.style.opacity = "0";

      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        overrideImg = img;
        dirty = true;
      };
      img.src = path(count - 1);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", sizeCanvas);
      };
    }

    // ---- Motion path: preload → pin → scrub ----
    // Lock the page while frames decode behind the preloader.
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    window.scrollTo(0, 0);

    let lenis: Lenis | null = null;
    let lenisTick: ((t: number) => void) | null = null;
    let st: ScrollTrigger | null = null;
    let begun = false;

    function begin() {
      if (begun) return;
      begun = true;

      html.style.overflow = prevOverflow;

      if (!mobile) {
        lenis = new Lenis({ lerp: 0.1 });
        lenis.on("scroll", ScrollTrigger.update);
        lenisTick = (t: number) => lenis!.raf(t * 1000);
        gsap.ticker.add(lenisTick);
        gsap.ticker.lagSmoothing(0);
      }

      st = ScrollTrigger.create({
        trigger: hero!,
        start: "top top",
        end: () => "+=" + window.innerHeight * (mobile ? 2.2 : 3),
        pin: stage!,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          state.f = self.progress;
          setOverlay(self.progress);
          dirty = true;
        },
        onRefresh: () => {
          dirty = true;
        },
      });

      setOverlay(0);
      ScrollTrigger.refresh();
      setReady(true);
    }

    const unsub = subscribe(({ loaded, total, done }) => {
      setProgress(total ? loaded / total : 0);
      dirty = true;
      if (done) begin();
    });

    const paths = Array.from({ length: count }, (_, i) => path(i));
    startLoading(paths);

    // Re-measure once fonts settle (pin math depends on layout).
    const fonts = (document as unknown as { fonts?: { ready: Promise<unknown> } })
      .fonts;
    fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", sizeCanvas);
      unsub();
      html.style.overflow = prevOverflow;
      if (lenisTick) gsap.ticker.remove(lenisTick);
      lenis?.destroy();
      st?.kill();
    };
  }, []);

  return (
    <>
      <div className="preloader" data-hidden={ready} aria-hidden={ready}>
        <div className="preloader-num">
          {Math.round(progress * 100)}
          <sup>%</sup>
        </div>
        <div className="preloader-bar">
          <span style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
        <div className="preloader-label">Rendering the studio</div>
      </div>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-stage" ref={stageRef}>
          <canvas className="hero-canvas" ref={canvasRef} aria-hidden />
          <div className="hero-overlay">
            <div className="hero-top" ref={introRef}>
              <p className="hero-role">{profile.roleArc}</p>
              <h1 className="hero-name">{profile.name}</h1>
            </div>
            <p className="hero-tagline" ref={taglineRef}>
              Building agentic AI,
              <br />
              <span className="accent">end to end</span>
            </p>
            <div className="scroll-hint" ref={hintRef}>
              <span className="bar" aria-hidden />
              Scroll
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
