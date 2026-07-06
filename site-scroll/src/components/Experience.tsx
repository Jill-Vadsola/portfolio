import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">02 / Experience</span>
          <h2 className="section-title">Where I&rsquo;ve shipped</h2>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="tl-item">
                <div className="tl-meta">
                  <h3 className="tl-role">
                    {job.role} <span className="tl-company">· {job.company}</span>
                  </h3>
                  <span className="tl-when">
                    {job.period} · {job.location}
                  </span>
                </div>
                <ul className="tl-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
