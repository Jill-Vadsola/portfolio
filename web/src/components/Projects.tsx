import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const accentMap: Record<Project["accent"], { text: string; ring: string; glow: string }> = {
  green: {
    text: "text-accent",
    ring: "group-hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_40px_-16px_rgba(34,197,94,0.6)]",
  },
  cyan: {
    text: "text-cyan",
    ring: "group-hover:border-cyan/50",
    glow: "group-hover:shadow-[0_0_40px_-16px_rgba(56,189,248,0.6)]",
  },
  violet: {
    text: "text-violet",
    ring: "group-hover:border-violet/50",
    glow: "group-hover:shadow-[0_0_40px_-16px_rgba(167,139,250,0.6)]",
  },
};

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      kicker="Selected work drawn from my experience the systems I designed, built, and shipped."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => {
          const a = accentMap[project.accent];
          return (
            <Reveal
              as="article"
              key={project.id}
              delay={i * 0.08}
              className="h-full"
            >
              <div
                className={`group flex h-full flex-col rounded-xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 ${a.ring} ${a.glow}`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className={`font-mono text-xs ${a.text}`}>
                    ./{project.id}
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-fg">
                  {project.title}
                </h3>
                <p className={`mt-1 text-sm ${a.text}`}>{project.blurb}</p>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm leading-snug text-muted"
                    >
                      <ArrowUpRight
                        size={15}
                        className={`mt-0.5 flex-none ${a.text}`}
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-bg/60 px-2 py-0.5 font-mono text-[11px] text-faint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
