"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-accent-dim text-accent transition-colors group-hover:border-accent">
            J
          </span>
          <span className="text-fg">
            jill<span className="text-accent">.</span>vadsola
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  <span className="font-mono text-xs text-accent">
                    {link.index}
                  </span>
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent-dim px-3 py-2 text-sm font-medium text-accent transition-all hover:border-accent hover:shadow-glow"
            >
              <FileText size={15} aria-hidden />
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle className="ml-1 h-9 w-9" />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-2 py-3 text-base text-muted transition-colors hover:text-fg"
                >
                  <span className="font-mono text-xs text-accent">
                    {link.index}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-accent/50 bg-accent-dim px-3 py-3 text-sm font-medium text-accent"
              >
                <FileText size={15} aria-hidden />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
