import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import skyline from "@/assets/skyline.jpg";

export function ParallaxScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const lineW = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[180vh] overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
          <img src={skyline} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-maroon-deep/40 to-ink" />
        </motion.div>

        <motion.div style={{ y: titleY }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  RISING ABOVE</p>
          <h2 className="font-display text-[12vw] leading-[0.9] md:text-[8vw] text-balance">
            Where skylines<br/><span className="italic gold-text">become signatures.</span>
          </h2>
          <motion.div style={{ width: lineW }} className="mt-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-12 max-w-2xl text-base text-bone/60 leading-relaxed">
            Every tower we raise is a vertical statement of intent — engineered to outlast trends, to honor the city, to define an era.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
