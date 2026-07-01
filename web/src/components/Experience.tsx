import { GraduationCap } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience, education } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      kicker="Two years across a startup, Amazon, and an agentic-AI team shipping production software end to end."
    >
      <div className="relative">
        {/* vertical rail */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-[9px]"
          aria-hidden
        />

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.05} className="relative pl-8 sm:pl-12">
              {/* node */}
              <span
                className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  job.current
                    ? "border-accent bg-accent shadow-glow"
                    : "border-border bg-surface"
                } sm:h-5 sm:w-5`}
                aria-hidden
              >
                {job.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-bg" />
                )}
              </span>

              <div className="card-surface rounded-xl p-6 transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-fg">
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">{job.location}</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-mono text-sm text-muted">{job.period}</span>
                  {job.current && (
                    <span className="rounded-full border border-accent/50 bg-accent-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Current
                    </span>
                  )}
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-surface/60 px-2 py-0.5 font-mono text-[11px] text-faint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Education */}
      <Reveal delay={0.1}>
        <h3 className="mb-5 mt-16 flex items-center gap-2 font-mono text-sm text-accent">
          <GraduationCap size={16} aria-hidden />
          {" // education"}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="card-surface rounded-xl p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold text-fg">{edu.school}</h4>
                <span className="font-mono text-xs text-faint whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{edu.degree}</p>
              <p className="mt-0.5 font-mono text-xs text-faint">{edu.location}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
