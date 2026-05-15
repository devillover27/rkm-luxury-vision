import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LuxuryCursor } from "@/components/LuxuryCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { Projects } from "@/components/Projects";
import { ParallaxScene } from "@/components/ParallaxScene";
import { WhyRKM } from "@/components/WhyRKM";
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
      { name: "description", content: "RKM Projects designs, builds and delivers signature luxury villas, sky residences and commercial landmarks across India's most coveted addresses." },
      { property: "og:title", content: "RKM Projects — Luxury Real Estate" },
      { property: "og:description", content: "Signature villas, sky residences, and architectural landmarks. A decade of distinction." },
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
      <ParallaxScene />
      <WhyRKM />
      <Lifestyle />
      <Investment />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
