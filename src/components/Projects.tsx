import { motion } from "framer-motion";
import gkGrand from "@/assets/gk-grand-apartments.jpg";
import villa from "@/assets/project-villa.jpg";
import apartment from "@/assets/project-apartment.jpg";
import commercial from "@/assets/project-commercial.jpg";
import community from "@/assets/project-community.jpg";

const PROJECTS = [
  { img: gkGrand, name: "GK Grand Apartments", loc: "Atchutapuram, Visakhapatnam", type: "2 BHK Residences", status: "Now Selling", roi: "Flagship Launch" },
  { img: villa, name: "Maison Aurelia", loc: "Coastal Estates, Visakhapatnam", type: "Private Villa", status: "Pre-Launch", roi: "18% p.a." },
  { img: apartment, name: "The Solenne", loc: "Madhapur, Hyderabad", type: "Sky Residences", status: "Phase II", roi: "22% p.a." },
  { img: commercial, name: "Atrium Noir", loc: "Financial District, Hyderabad", type: "Commercial Tower", status: "Operational", roi: "14% p.a." },
  { img: community, name: "Vereda Gardens", loc: "Outer Ring, Vizag", type: "Gated Community", status: "Phase II", roi: "20% p.a." },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE PORTFOLIO</p>
            <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">
              Signature <span className="italic gold-text">addresses.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/60">
            A curated collection of residences, towers, and communities where every detail is considered, and every threshold becomes a moment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-maroon-deep">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-maroon/40 via-transparent to-transparent mix-blend-overlay" />

                {/* Animated border */}
                <div className="pointer-events-none absolute inset-4 border border-gold/0 transition-all duration-700 group-hover:border-gold/40" />

                {/* Status pill */}
                <div className="absolute left-6 top-6 glass-gold rounded-full px-4 py-1.5">
                  <span className="font-cinzel text-[9px] tracking-widest text-gold">{p.status.toUpperCase()}</span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="font-cinzel text-[10px] tracking-[0.3em] text-gold/70">{p.type.toUpperCase()}</p>
                  <h3 className="mt-3 font-display text-4xl text-bone md:text-5xl">{p.name}</h3>
                  <div className="mt-6 flex items-end justify-between border-t border-bone/15 pt-5">
                    <div>
                      <p className="font-cinzel text-[9px] tracking-widest text-bone/40">LOCATION</p>
                      <p className="mt-1 text-sm text-bone/90">{p.loc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-cinzel text-[9px] tracking-widest text-bone/40">PROJECTED ROI</p>
                      <p className="mt-1 font-display text-xl gold-text">{p.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
