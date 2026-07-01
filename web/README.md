# Jill Vadsola — Portfolio

A single-page developer portfolio for **Jill Vadsola** (AI Engineer / Agentic AI & LLM),
with **two switchable themes** sharing one component set:

- **Aurora** (default) — modern glassmorphism: light aurora-gradient background,
  frosted-glass cards, indigo accent.
- **Terminal** — OLED-dark "AI / terminal": deep-navy background, run-green accent,
  grid + glow.

Type is Space Grotesk (display) + Inter (body) + JetBrains Mono (code accents),
with scroll-reveal motion throughout.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- **Framer Motion** — scroll reveals, hero animation (respects `prefers-reduced-motion`)
- **Lucide** icons + inline SVG brand logos

## Theming

Both themes are driven by CSS variables keyed on `[data-theme]` in
`src/app/globals.css` (`aurora` and `terminal`). Components use semantic tokens
(`bg-accent`, `card-surface`, `text-on-accent`, `shadow-glow`, …) so they adapt
automatically. The toggle (`src/components/ThemeToggle.tsx`) persists the choice
to `localStorage`; a tiny inline script in `layout.tsx` applies it before paint
to avoid a flash. To change the default, edit the fallback in that script and the
`data-theme` on `<html>`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

> Note: if port 3000 is busy, run `PORT=4321 npm run dev`.

Production build:

```bash
npm run build
npm start
```

## Editing content

All copy lives in **`src/lib/data.ts`** — profile, stats, skills, experience,
education, and projects. Edit values there and the whole site updates.

Sections (in `src/components/`): `Nav`, `Hero`, `About`, `Skills`,
`Experience`, `Projects`, `Contact`, `Footer`.

## Things to personalize

- **LinkedIn URL** — `profile.linkedin` in `src/lib/data.ts` is a best-guess
  placeholder. Replace with your real profile URL.
- **GitHub URL** — the hero GitHub link points at `https://github.com/`. Set it
  to your real handle in `src/components/Hero.tsx`.
- **Résumé PDF** — served from `public/Jill_Vadsola_Resume.pdf`.
- **Site URL / OG** — `siteUrl` in `src/app/layout.tsx` (used for SEO metadata).

## Deploy

Zero-config on **Vercel**: push to a Git repo and import, or run `npx vercel`.
The `web/` folder is the project root.
