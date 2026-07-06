/** The single asset-config point for the scroll-hero frame sequence.
 *  After (re)extracting frames with ffmpeg, update the counts below to match
 *  `ls public/frames | wc -l`. Everything else derives from these. */

/** Desktop opening-laptop frames in `public/frames/` (1080×1440, studio bg crushed to page color). */
export const TOTAL_FRAMES = 121;
/** Mobile-tier frames in `public/frames-sm/` (640-wide, same motion). */
export const TOTAL_FRAMES_SM = 121;

const pad = (i: number) => String(i + 1).padStart(4, "0");

/** 0-indexed → `/frames/frame_0001.webp` (transparent cutout of the figure). */
export const framePath = (i: number) => `/frames/frame_${pad(i)}.webp`;
export const framePathSm = (i: number) => `/frames-sm/frame_${pad(i)}.webp`;

/** Static poster shown before frames decode / when motion is reduced. */
export const POSTER_SRC = "/figurine.png";

export const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
