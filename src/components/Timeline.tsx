import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { k: "01", t: "Planning", d: "Site analysis, zoning, vastu, master plan." },
  { k: "02", t: "Design", d: "Architecture, interiors, MEP, landscape." },
  { k: "03", t: "Construction", d: "RCC, finishes, MEP integration, audits." },
  { k: "04", t: "Completion", d: "Snag-free walkthrough, OC & utility hookups." },
  { k: "05", t: "Handover", d: "Concierge onboarding, lifetime service." },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-40 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-24 text-center">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE JOURNEY</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            From <span className="italic gold-text">vision to keys.</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-bone/10" />
          <motion.div style={{ height: lineH }} className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold via-gold to-transparent" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`relative mb-24 grid grid-cols-9 items-center gap-4 ${i % 2 ? "" : ""}`}
            >
              <div className={`col-span-4 ${i % 2 ? "order-3 text-left" : "text-right"}`}>
                <p className="font-cinzel text-xs text-gold/70">{s.k}</p>
                <h3 className="mt-2 font-display text-4xl text-bone">{s.t}</h3>
                <p className="mt-3 text-sm text-bone/55">{s.d}</p>
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="h-4 w-4 rotate-45 border border-gold bg-ink" />
              </div>
              <div className="col-span-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
