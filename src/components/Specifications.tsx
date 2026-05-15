import { motion } from "framer-motion";
import {
  Building2, Brick, Hammer, DoorClosed, ChefHat, LayoutGrid,
  Droplets, Zap, ArrowUpDown, Footprints, Plug, AppWindow, Car, Waves
} from "lucide-react";

const SPECS = [
  { icon: Building2, t: "Super Structure", d: "RCC framed structure with earthquake-resistant design." },
  { icon: Brick, t: "Walls", d: "Traditional clay brick masonry. External 9″ & 6″, internal 4½″." },
  { icon: Hammer, t: "Plastering", d: "Sponge-finished double-coat externally. Semi-sponge internally." },
  { icon: DoorClosed, t: "Doors", d: "Polished teakwood main door. WPC frames and designed flush doors." },
  { icon: ChefHat, t: "Kitchen", d: "Granite platform, stainless steel sink, RO point, vitrified dado." },
  { icon: LayoutGrid, t: "Flooring", d: "800×800 mm vitrified tiles. Anti-skid ceramic in baths & utility." },
  { icon: Droplets, t: "Plumbing & Sanitary", d: "Hot & cold mixers, premium taps, branded sanitary ware." },
  { icon: Zap, t: "Generator", d: "Power backup for lift, motor and all common areas." },
  { icon: ArrowUpDown, t: "Lift", d: "Standard-make passenger lift, 6-person capacity." },
  { icon: Footprints, t: "Stair Case", d: "SS hand railing with granite flooring throughout." },
  { icon: Plug, t: "Electrical", d: "Modular switches, A/C provision in two bedrooms, geyser points." },
  { icon: AppWindow, t: "Windows", d: "Premium UPVC windows for thermal & acoustic comfort." },
  { icon: Car, t: "Parking", d: "Covered single car parking allotted per residence." },
  { icon: Waves, t: "Water Supply", d: "24-hour bore water supply from overhead tank." },
];

export function Specifications() {
  return (
    <section id="specifications" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-deep/15 to-ink" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE BLUEPRINT</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            Engineered to <span className="italic gold-text">last generations.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/60">
            Every RKM residence is built to a single, uncompromising specification — sourced, audited and signed off by our in-house quality bureau.
          </p>
        </div>

        <div className="grid gap-px bg-bone/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className="group flex gap-5 bg-ink p-8 transition-colors duration-500 hover:bg-maroon-deep/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold/30 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                <s.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl text-bone">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/55">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
