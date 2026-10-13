import Hero from "../components/Hero/Hero";
import Expertise from "../components/Expertise/Expertise";
import Services from "../components/Services/Services";
import Marquee from "../components/Marquee/Marquee";
import CTA from "../components/CTA/CTA";
import ImageMarquee from "../components/ImageMarquee/ImageMarquee";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import StackingCards from "../components/StackingCards/StackingCards";
import Blog from "../components/Blog/Blog";
import Testimonials from "../components/Testimonials/Testimonials";
import InnovationMarquee from "../components/InnovationMarquee/InnovationMarquee";
import BottomCTA from "../components/BottomCTA/BottomCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Services />
      <Marquee />
      <CTA />
      <ImageMarquee />
      <About />
      <Projects />
      <StackingCards />
      <Blog />
      <Testimonials />
      <InnovationMarquee />
      <BottomCTA />
    </>
  );
}

