import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import interior from "@/assets/interior-penthouse.jpg";
import rooftop from "@/assets/lifestyle-rooftop.jpg";

const LINES = ["Luxury Beyond Walls.", "Designed For Generations.", "Live Above Expectations."];

export function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div style={{ y: yA }} className="md:col-span-5 md:mt-32">
            <div className="overflow-hidden rounded-sm">
              <img src={interior} alt="Penthouse interior" loading="lazy" className="h-[70vh] w-full object-cover" />
            </div>
            <p className="mt-4 font-cinzel text-[10px] tracking-[0.3em] text-bone/40">◆ THE SOLENNE — SKY LOUNGE</p>
          </motion.div>

          <div className="md:col-span-7 md:pl-10">
            <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE LIFESTYLE</p>
            <h2 className="font-display text-[10vw] leading-[0.9] md:text-[5.5vw]">
              {LINES.map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className={i === 1 ? "italic gold-text" : "text-bone"}
                >
                  {l}
                </motion.div>
              ))}
            </h2>

            <motion.div style={{ y: yB }} className="mt-16 overflow-hidden rounded-sm">
              <img src={rooftop} alt="Rooftop infinity pool" loading="lazy" className="h-[50vh] w-full object-cover" />
            </motion.div>
            <p className="mt-4 font-cinzel text-[10px] tracking-[0.3em] text-bone/40">◆ ATRIUM NOIR — CLOUD DECK</p>
          </div>
        </div>
      </div>
    </section>
  );
}
