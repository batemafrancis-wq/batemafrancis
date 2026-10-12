import { journey } from "@/lib/data";
import { Reveal } from "./reveal";

export function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <h2 className="section-title">
          My Journey — <span className="accent">Years of Expertise</span>
        </h2>
        <p className="section-sub">
          From the very beginning to today: how 2+ years of constant learning became real-world
          expertise.
        </p>

        <div className="timeline">
          {journey.map((entry, i) => (
            <Reveal className="timeline-item" key={`${entry.year}-${entry.title}`} delay={i * 0.04}>
              <div className="timeline-year">{entry.year}</div>
              <div className="timeline-card">
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
