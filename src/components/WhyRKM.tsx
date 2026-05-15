import { motion } from "framer-motion";

const FEATURES = [
  { n: "I", t: "Premium Construction", d: "Triple-graded materials, audited by independent quality bureaus at every milestone." },
  { n: "II", t: "Architectural Mastery", d: "In-house atelier of award-winning designers shaping every elevation, every void." },
  { n: "III", t: "Prime Locations", d: "Land banked years in advance — gateways, waterfronts, and protected enclaves." },
  { n: "IV", t: "Trusted Investment", d: "Fully RERA-compliant. Transparent escrow. Title-clear. Lender-approved." },
  { n: "V", t: "Transparent Process", d: "Milestone-linked payments, live build cameras, monthly investor digest." },
  { n: "VI", t: "Modern Amenities", d: "Concierge, club, spa, sky pool, EV bays — designed by hospitality specialists." },
  { n: "VII", t: "On-Time Delivery", d: "Every project for the last 8 years has been handed over on or ahead of schedule." },
  { n: "VIII", t: "Smart Living", d: "Native automation, climate intelligence, and biometric privacy in every home." },
];

export function WhyRKM() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.32_0.13_18/0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-24 max-w-3xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  WHY RKM</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            Eight reasons the discerning <span className="italic gold-text">return.</span>
          </h2>
        </div>

        <div className="grid gap-px bg-bone/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative bg-ink p-8 transition-colors duration-700 hover:bg-maroon-deep/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(circle at top right, oklch(0.82 0.13 82 / 0.08), transparent 60%)" }} />
              <p className="font-cinzel text-xs text-gold/60">{f.n}</p>
              <h3 className="mt-6 font-display text-2xl text-bone">{f.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/55">{f.d}</p>
              <div className="mt-8 h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
