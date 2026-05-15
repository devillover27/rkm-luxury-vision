import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  const lines = [
    "We don't just build spaces.",
    "We craft timeless living",
    { gold: "experiences." },
  ];

  return (
    <section ref={ref} id="experience" className="relative py-40 overflow-hidden">
      {/* Drifting wireframe text */}
      <motion.div
        style={{ x }}
        className="pointer-events-none absolute -top-10 left-0 whitespace-nowrap font-display text-[20vw] leading-none text-bone/[0.03]"
      >
        ARCHITECTURE · LEGACY · ARCHITECTURE
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-10 font-cinzel text-[11px] tracking-[0.4em] text-gold/80"
        >
          ◆  THE RKM PHILOSOPHY
        </motion.p>

        <h2 className="font-display text-[8vw] leading-[0.95] md:text-[5.5vw]">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {typeof l === "string" ? l : <span className="italic gold-text">{l.gold}</span>}
            </motion.div>
          ))}
        </h2>

        <div className="mt-24 grid gap-16 md:grid-cols-3">
          {[
            { k: "01", t: "Founder's Vision", d: "Two decades of architectural mastery distilled into every column, every corner, every quiet moment of light." },
            { k: "02", t: "Uncompromising Craft", d: "Italian marble. German engineering. Indian soul. We source the world to build for generations." },
            { k: "03", t: "Trust Beyond Walls", d: "Every handover is a promise kept. Every key, a covenant of excellence delivered on time." },
          ].map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="border-t border-gold/20 pt-6"
            >
              <p className="font-cinzel text-xs text-gold/70">{b.k}</p>
              <h3 className="mt-3 font-display text-3xl text-bone">{b.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/60">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
