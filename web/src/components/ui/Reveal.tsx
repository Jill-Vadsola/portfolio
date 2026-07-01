"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Scroll-triggered reveal. Fades + slides content into view once.
 * When the user prefers reduced motion, we render a plain, fully-visible
 * element with no motion dependency at all (never trapped at opacity 0).
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as, { className }, children);
  }

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.5, 0.3, 1] as const }}
    >
      {children}
    </MotionTag>
  );
}
