import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">01 / About</span>
        </div>
        <Reveal>
          <p className="lead">{profile.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
