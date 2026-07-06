import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">03 / Selected work</span>
          <h2 className="section-title">Things I&rsquo;ve built</h2>
        </div>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className={`project${p.featured ? " project--featured" : ""}`}>
                <div className="project-head">
                  {p.featured && <span className="eyebrow">Featured</span>}
                  <span className="project-year">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-blurb">{p.blurb}</p>
                <ul className="project-points">
                  {p.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
