import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {profile.name.split(" ")[0]} Vadsola · Built with Next.js &amp; Tailwind
        </p>
        <p className="font-mono text-xs text-faint">
          <span className="text-accent">$</span> designed &amp; coded from{" "}
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
