import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { StudioMorph } from "@/components/site/studio-morph";
import { Services } from "@/components/site/services";
import { Expertise } from "@/components/site/expertise";
import { Products } from "@/components/site/products";
import { Testimonials } from "@/components/site/testimonials";
import { Journey } from "@/components/site/journey";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StudioMorph />
        <Services />
        <Expertise />
        <Products />
        <Testimonials />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}