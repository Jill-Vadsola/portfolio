import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer shell">
      <span>
        © {year} {profile.name}
      </span>
      <span>Next.js · Canvas · GSAP · Lenis</span>
    </footer>
  );
}
