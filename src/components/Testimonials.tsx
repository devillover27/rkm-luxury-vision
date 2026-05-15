import { motion } from "framer-motion";

const QUOTES = [
  { q: "RKM didn't sell us a home. They unveiled a chapter of our family's story we hadn't yet imagined.", n: "Aarav & Meera Khanna", r: "Owners, Maison Aurelia" },
  { q: "The only developer where the brochure and the keys describe the same building. A rarity in this market.", n: "S. Venkateshwaran", r: "Investor, 4 properties" },
  { q: "Every detail — from the door handles to the elevator scent — felt personal. Hospitality dressed as architecture.", n: "Diya Rao", r: "Resident, The Solenne" },
];

export function Testimonials() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.32_0.13_18/0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  IN THEIR WORDS</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            The voices of those <span className="italic gold-text">who live here.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {QUOTES.map((Q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass hover-lift relative rounded-sm p-10"
            >
              <span className="absolute -top-6 left-8 font-display text-8xl leading-none gold-text opacity-60">"</span>
              <blockquote className="font-display text-2xl italic leading-snug text-bone">{Q.q}</blockquote>
              <figcaption className="mt-8 border-t border-bone/10 pt-6">
                <p className="font-cinzel text-sm text-bone">{Q.n}</p>
                <p className="mt-1 text-xs text-bone/50">{Q.r}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
