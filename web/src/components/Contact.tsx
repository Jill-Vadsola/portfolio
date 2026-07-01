import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./BrandIcons";
import { Reveal } from "./ui/Reveal";
import { CopyEmail } from "./CopyEmail";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <Reveal className="card-surface relative overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-12">
        {/* glow accent */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <span className="relative font-mono text-sm text-accent">
          05. // contact
        </span>
        <h2 className="relative mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Let&apos;s build something intelligent.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m open to AI engineering and full-stack roles. Have an agentic
          idea, a RAG problem, or just want to talk shop? My inbox is open.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:shadow-glow"
          >
            <Mail size={16} aria-hidden />
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon size={16} /> LinkedIn
            <ArrowUpRight size={13} aria-hidden />
          </a>
          <span className="text-border" aria-hidden>
            •
          </span>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Résumé
            <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
