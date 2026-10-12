import { expertise } from "@/lib/data";
import { Reveal } from "./reveal";

export function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent">Expertise</span>
        </h2>
        <p className="section-sub">
          Explained simply — no tech jargon, just what each skill means for your business.
        </p>

        <div className="m3-grid">
          {expertise.map((item, i) => (
            <Reveal as="article" className="m3-card" key={item.title} delay={i * 0.05}>
              <div className="m3-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="m3-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
