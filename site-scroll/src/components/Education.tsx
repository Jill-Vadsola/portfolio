import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">05 / Education</span>
        </div>
        <div>
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <div className="edu-item">
                <span className="edu-school">{e.school}</span>
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-when">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
