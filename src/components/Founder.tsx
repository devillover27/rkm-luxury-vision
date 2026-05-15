import { motion } from "framer-motion";
import founder from "@/assets/founder-rkm.jpg";

const STATS = [
  { v: "15", l: "Years of Experience" },
  { v: "5,500+", l: "Events Since 2011" },
  { v: "400", l: "Indian Celebrities" },
  { v: "40", l: "Countries Network" },
  { v: "2L+", l: "Direct NRI Contacts" },
  { v: "₹1,000–2,000 Cr", l: "NRI Investment Pipeline" },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.32_0.13_18/0.35),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-6 md:px-10 lg:grid-cols-[5fr_7fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img src={founder} alt="RaviKumar Manda — Founder, RKM Projects" className="h-[640px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-cinzel text-[10px] tracking-[0.3em] text-gold/80">◆  FOUNDER & MD</p>
              <p className="mt-3 font-display text-4xl text-bone">RaviKumar Manda</p>
              <p className="font-cinzel text-xs tracking-widest text-bone/60">RkM · MANAGING DIRECTOR</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE VISIONARY</p>
          <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
            From the stage to <span className="italic gold-text">skylines.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/65">
            A celebrated Tollywood singer and Managing Director of Ravi Melodies Pvt. Ltd., RaviKumar Manda has spent fifteen years building India's most prolific entertainment and NRI relationship network — now channelling that trust into landmark real estate.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px bg-bone/[0.06] sm:grid-cols-3">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-ink p-6"
              >
                <p className="font-display text-3xl gold-text">{s.v}</p>
                <p className="mt-2 font-cinzel text-[10px] tracking-widest text-bone/55">{s.l.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
