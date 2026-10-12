import { services } from "@/lib/data";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">
          What we <span className="accent">build</span>
        </h2>
        <p className="section-sub">
          Impactful technology solutions across all platforms — from startups to enterprises.
        </p>

        <div className="cards-grid services-grid">
          {services.map((service, i) => (
            <Reveal as="article" className="card service-card" key={service.title} delay={i * 0.05}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
