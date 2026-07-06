import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">06 / Contact</span>
        </div>
        <Reveal>
          <p className="lead muted" style={{ marginBottom: "1.75rem" }}>
            Open to AI-engineering roles across Canada. Let&rsquo;s build something.
          </p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-row">
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <span>{profile.location}</span>
          </div>
          <div style={{ marginTop: "2.4rem" }}>
            <a className="btn btn-accent" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
