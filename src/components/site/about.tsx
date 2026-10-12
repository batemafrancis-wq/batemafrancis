export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title left">
            Built by <span className="accent">BATEMA FRANCIS</span> &amp; team
          </h2>
          <p>
            Batema Francis is a full-stack engineer and entrepreneur based in Kampala, Uganda, with{" "}
            <strong>
              2+ years of expertise from the very beginning of his coding journey in 2022
            </strong>
            . He leads every project personally — from first sketch to final launch.
          </p>
          <p>
            Our vision goes far beyond today: self-generative robots, augmented reality experiences
            and even intergalactic portals. We dream big and build carefully.
          </p>
          <p>
            Trusted by businesses like <strong>Rajat Beauty Parlour</strong> and{" "}
            <strong>Uzuri Hair Salon</strong>, we treat every client&apos;s project like our own.
          </p>
          <ul className="about-points">
            <li>✅ 2+ years of hands-on experience</li>
            <li>✅ Speaks English, Luganda &amp; Korean</li>
            <li>✅ Based at Latitude One Suites, Ntinda, Kampala</li>
            <li>✅ Founder &amp; lead engineer at Essence</li>
          </ul>
        </div>
        <div className="about-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/rubais.jpeg" alt="Batema Francis portrait" />
          <h3>Batema Francis</h3>
          <p className="accent">Full-stack &amp; SOFTWARE ENGINEER</p>
        </div>
      </div>
    </section>
  );
}
