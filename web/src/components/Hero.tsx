"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "./BrandIcons";
import { profile } from "@/lib/data";

function useTypedRoles(words: readonly string[]) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0]);
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return; // keep first role static
    const current = words[i];
    const done = !deleting && sub === current.length;
    const cleared = deleting && sub === 0;

    const delay = done ? 1600 : cleared ? 260 : deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (done) {
        setDeleting(true);
        return;
      }
      if (cleared) {
        setDeleting(false);
        setI((p) => (p + 1) % words.length);
        return;
      }
      const next = sub + (deleting ? -1 : 1);
      setSub(next);
      setText(current.slice(0, next));
    }, delay);
    return () => clearTimeout(t);
  }, [sub, deleting, i, words, reduce]);

  return reduce ? words[0] : text;
}

const terminalLines = [
  { p: "$", cmd: "whoami", out: null },
  { p: null, cmd: null, out: "jill vadsola — ai engineer" },
  { p: "$", cmd: "cat stack.json", out: null },
  { p: null, cmd: null, out: '{ "agentic": "Mastra", "retrieval": "RAG + Vector DB",' },
  { p: null, cmd: null, out: '  "gateway": "OpenRouter", "web": "React / Next.js" }' },
  { p: "$", cmd: "status --now", out: null },
  { p: null, cmd: null, out: "● available for opportunities" },
];

export function Hero() {
  const role = useTypedRoles(profile.roles);
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.5, 0.3, 1] as const } },
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to AI / full-stack roles
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex h-9 items-center font-mono text-xl text-accent glow-text sm:text-2xl"
          >
            <span className="mr-2 text-faint">{">"}</span>
            <span className="caret">{role}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            {profile.tagline} I design agentic systems, RAG pipelines, and the
            full-stack products around them from vector retrieval to shipped UI.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 font-mono text-sm text-faint">
            <MapPin size={15} className="text-accent" aria-hidden />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-all hover:shadow-glow"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn" external>
              <LinkedInIcon size={18} />
            </SocialLink>
            {/* <SocialLink href="https://github.com/" label="GitHub" external>
              <GitHubIcon size={18} />
            </SocialLink> */}
          </motion.div>
        </motion.div>

        {/* Right: terminal card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.5, 0.3, 1] }}
          className="card-surface relative rounded-xl shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-faint">jill@portfolio: ~</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            {terminalLines.map((line, idx) => (
              <TerminalLine key={idx} {...line} index={idx} reduce={!!reduce} />
            ))}
            <span className="caret text-accent" />
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalLine({
  p,
  cmd,
  out,
  index,
  reduce,
}: {
  p: string | null;
  cmd: string | null;
  out: string | null;
  index: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.18, duration: 0.3 }}
      className="whitespace-pre-wrap"
    >
      {p && <span className="text-accent">{p} </span>}
      {cmd && <span className="text-fg">{cmd}</span>}
      {out && (
        <span className={out.startsWith("●") ? "text-accent-soft" : "text-muted"}>
          {out}
        </span>
      )}
    </motion.div>
  );
}

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/50 hover:text-accent"
    >
      {children}
    </a>
  );
}
