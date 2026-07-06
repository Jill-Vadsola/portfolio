import Reveal from "./Reveal";
import { featuredProject } from "@/lib/data";

export default function FeaturedProject() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">03 / {featuredProject.eyebrow}</span>
        </div>
        <Reveal>
          <div className="feature">
            <span className="eyebrow">Production LLM app</span>
            <h3 className="feature-title">{featuredProject.title}</h3>
            <p className="feature-blurb">{featuredProject.blurb}</p>
            <div className="feature-stack">
              {featuredProject.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
