import { motion } from "framer-motion";
import siteMap from "@/assets/site-map.jpg";

const INDUSTRIES = [
  "Saint-Gobain India — Glass & Gypsum",
  "Alliance Tire Group (Yokohama) — Off-highway Tyres",
  "Shyam Ferro Alloys — Titanium Slag",
  "Maa Durga Iron & Steel",
  "Balaji Action Buildwell (Action Tesa)",
  "Inox Air Products — Industrial Gases",
  "Vishnu Chemicals — Specialty Chemicals",
  "Deccan Fine Chemicals (India)",
  "Sanvira Industries — Petroleum Coke",
  "NTPC Green Hydrogen Project",
];

const LIFESTYLE = [
  { t: "Visakha Valley", d: "2.5 km" },
  { t: "Pavan Sai Hospital", d: "2 km" },
  { t: "Bhasyam School", d: "1 km" },
  { t: "Narayana College", d: "2 km" },
  { t: "Two Children's Parks", d: "Walkable" },
];

export function Highlights() {
  return (
    <section id="highlights" className="relative py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  GK GRAND @ ATCHUTAPURAM</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            A neighbourhood of <span className="italic gold-text">growth.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/60">
            Strategically positioned on the Visakhapatnam corridor, surrounded by India's most ambitious industrial investments, top schools and the upcoming NTPC Green Hydrogen project.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[6fr_5fr]">
          {/* Industries */}
          <div className="glass rounded-sm p-10">
            <p className="font-cinzel text-[10px] tracking-widest text-gold">◆  INDUSTRIAL HORIZON</p>
            <p className="mt-4 font-display text-3xl text-bone">A pin-code of opportunity.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {INDUSTRIES.map((i, idx) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="flex items-start gap-3 text-sm text-bone/75"
                >
                  <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {i}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 border-t border-bone/10 pt-8">
              <p className="font-cinzel text-[10px] tracking-widest text-gold">◆  EVERYDAY LIFE</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {LIFESTYLE.map((l) => (
                  <div key={l.t} className="flex items-baseline justify-between border-b border-bone/10 pb-2">
                    <span className="font-display text-lg text-bone">{l.t}</span>
                    <span className="font-cinzel text-[10px] tracking-widest gold-text">{l.d.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Site Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-sm border border-gold/20"
          >
            <img src={siteMap} alt="RKM @ Atchutapuram site location map" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-cinzel text-[10px] tracking-widest text-gold">◆  SITE MAP</p>
                <p className="mt-1 font-display text-2xl text-bone">Atchutapuram, Visakhapatnam</p>
              </div>
              <p className="font-cinzel text-[9px] tracking-widest text-bone/60">ON NH-16 · NEAR SEZ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
