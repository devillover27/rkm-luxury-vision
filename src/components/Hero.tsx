import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-villa.jpg";

const ROTATING = [
  "Premium Residences",
  "Luxury Villas",
  "Smart Investments",
  "Modern Architecture",
  "Elevated Living",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="Luxury villa at twilight" className="h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,transparent,oklch(0.12_0.012_20/0.85))]" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/40"
            initial={{ x: Math.random() * 1600, y: Math.random() * 900, opacity: 0 }}
            animate={{
              y: [Math.random() * 900, Math.random() * 900 - 400],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 8 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: titleY, opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8 font-cinzel text-[11px] tracking-[0.4em] text-gold/80"
        >
          ◆  CRAFTING LUXURY LIVING EXPERIENCES  ◆
        </motion.p>

        <h1 className="font-display text-[16vw] leading-[0.85] tracking-tight md:text-[11vw]">
          {"RKM".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block gold-text"
            >
              {c}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="ml-[0.1em] inline-block font-cinzel text-[3vw] align-top text-bone/50 md:text-[1.5vw]"
          >
            PROJECTS
          </motion.span>
        </h1>

        <div className="relative mt-10 h-10 overflow-hidden">
          {ROTATING.map((t, i) => (
            <motion.div
              key={t}
              initial={false}
              animate={{
                y: idx === i ? 0 : idx === (i + 1) % ROTATING.length ? -40 : 40,
                opacity: idx === i ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 font-display text-2xl italic text-bone/80 md:text-3xl"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="mb-3 font-cinzel text-[10px] tracking-[0.3em] text-bone/50">SCROLL</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto h-12 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 left-6 z-10 hidden md:block"
      >
        <div className="glass rounded-sm px-5 py-4">
          <p className="font-cinzel text-[10px] tracking-widest text-gold/80">EST. 2014</p>
          <p className="mt-1 font-display text-lg text-bone">A Decade of Distinction</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-24 right-6 z-10 hidden md:block"
      >
        <div className="glass rounded-sm px-5 py-4 text-right">
          <p className="font-cinzel text-[10px] tracking-widest text-gold/80">PORTFOLIO</p>
          <p className="mt-1 font-display text-lg text-bone">42+ Signature Projects</p>
        </div>
      </motion.div>
    </section>
  );
}
