import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LuxuryCursor } from "@/components/LuxuryCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { Projects } from "@/components/Projects";
import { Highlights } from "@/components/Highlights";
import { Specifications } from "@/components/Specifications";
import { ParallaxScene } from "@/components/ParallaxScene";
import { WhyRKM } from "@/components/WhyRKM";
import { Founder } from "@/components/Founder";
import { Lifestyle } from "@/components/Lifestyle";
import { Investment } from "@/components/Investment";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RKM Projects — Crafting Luxury Living Experiences" },
      { name: "description", content: "RKM Projects builds signature residences across Andhra & Telangana — flagship GK Grand Apartments at Atchutapuram, Visakhapatnam. A Ravi Melodies venture led by RaviKumar Manda." },
      { property: "og:title", content: "RKM Projects — Luxury Real Estate" },
      { property: "og:description", content: "Signature residences, sky homes and architectural landmarks. Backed by a 40-country NRI network. Since 2011." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-ink text-bone">
      <SmoothScroll />
      <LuxuryCursor />
      <Nav />
      <Hero />
      <StorySection />
      <Projects />
      <Highlights />
      <Specifications />
      <ParallaxScene />
      <WhyRKM />
      <Founder />
      <Lifestyle />
      <Investment />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
