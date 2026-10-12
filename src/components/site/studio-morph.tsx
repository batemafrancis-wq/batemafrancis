import ScrollMorphHero from "@/components/ui/scroll-morph-hero";

export function StudioMorph() {
  return (
    <section id="slideshow" className="section slideshow-section">
      <div className="container">
        <h2 className="section-title">
          Inside the <span className="accent">Studio</span>
        </h2>
        <p className="section-sub">A glimpse of how we design, build and ship great products.</p>
        <div className="w-full h-[460px] sm:h-[580px] lg:h-[700px] rounded-lg overflow-hidden relative">
          <ScrollMorphHero />
        </div>
      </div>
    </section>
  );
}