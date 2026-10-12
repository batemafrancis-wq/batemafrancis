import { testimonials } from "@/lib/data";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">
          What clients <span className="accent">say</span>
        </h2>
        <p className="section-sub">Honest words from the people we&apos;ve built for.</p>
        <AnimatedTestimonials
          testimonials={testimonials.map((testimonial) => ({
            quote: testimonial.quote,
            name: testimonial.name,
            designation: testimonial.role,
            src: testimonial.src,
          }))}
          className="py-4"
        />
      </div>
    </section>
  );
}