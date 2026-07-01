import {
  Brain,
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  TestTube2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skills } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  ai: Brain,
  lang: Code2,
  fe: Layout,
  be: Server,
  db: Database,
  cloud: Cloud,
  test: TestTube2,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      kicker="The toolkit I reach for from LLM orchestration down to the database and the pipeline that feeds it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[group.tag] ?? Code2;
          const featured = group.tag === "ai";
          return (
            <Reveal
              key={group.title}
              delay={i * 0.05}
              className={featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <div
                className={`group h-full rounded-xl border p-5 transition-colors ${
                  featured
                    ? "border-accent/40 bg-accent-dim/40"
                    : "card-surface hover:border-accent/40"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                      featured
                        ? "border-accent/50 bg-accent-dim text-accent"
                        : "border-border bg-surface text-muted group-hover:text-accent"
                    } transition-colors`}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <h3 className="font-semibold text-fg">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
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
