import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">04 / Skills</span>
          <h2 className="section-title">The toolkit</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 2) * 90}>
              <div className="skill-group">
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
