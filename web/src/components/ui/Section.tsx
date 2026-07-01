import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

/**
 * Consistent section shell: monospace index + heading, generous rhythm.
 */
export function Section({ id, index, title, kicker, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <Reveal>
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-sm text-accent">
            <span className="text-faint">{index}.</span>
            {` // ${title.toLowerCase()}`}
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {title}
            </h2>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
          </div>
          {kicker && (
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {kicker}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
