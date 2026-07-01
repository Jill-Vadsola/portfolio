import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m an{" "}
            <span className="text-fg">AI engineer with a full-stack backbone.</span>{" "}
            After two years shipping production software, I now focus on building{" "}
            <span className="text-accent">agentic AI and LLM applications</span>
            systems that reason over real data instead of guessing.
          </p>
          <p>
            Most recently I architected an agentic underwriting assistant in
            TypeScript with the Mastra framework: a RAG pipeline over a vector
            database and a multi-tier OpenRouter gateway that grounds every
            response in source rules and keeps hallucinations in check.
          </p>
          <p>
            That AI work sits on top of years of{" "}
            <span className="text-fg">React, Next.js, Node.js and REST</span>{" "}
            experience plus hands-on AWS, CI/CD and Git so I can take an idea
            from vector retrieval all the way to a shipped, tested interface.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4 self-start">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-surface rounded-xl p-5 transition-colors hover:border-accent/40"
            >
              <div className="font-mono text-3xl font-bold text-accent glow-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
