import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-deep/40 to-ink" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 max-w-4xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE INVITATION</p>
          <h2 className="font-display text-[10vw] leading-[0.9] md:text-[6.5vw]">
            Step inside <span className="italic gold-text">your story.</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass rounded-sm p-10 md:p-12"
          >
            {[
              { l: "Your Name", t: "text", p: "Aarav Khanna" },
              { l: "Email", t: "email", p: "you@domain.com" },
              { l: "Phone", t: "tel", p: "+91 98xxx xxxxx" },
            ].map((f) => (
              <div key={f.l} className="mb-8">
                <label className="font-cinzel text-[10px] tracking-widest text-bone/60">{f.l.toUpperCase()}</label>
                <input
                  type={f.t}
                  placeholder={f.p}
                  className="mt-2 w-full border-0 border-b border-bone/20 bg-transparent pb-3 font-display text-xl text-bone outline-none transition-colors focus:border-gold"
                />
              </div>
            ))}
            <div className="mb-10">
              <label className="font-cinzel text-[10px] tracking-widest text-bone/60">INTEREST</label>
              <select className="mt-2 w-full border-0 border-b border-bone/20 bg-transparent pb-3 font-display text-xl text-bone outline-none focus:border-gold">
                <option className="bg-ink">Private Villa</option>
                <option className="bg-ink">Sky Residence</option>
                <option className="bg-ink">Commercial Investment</option>
                <option className="bg-ink">Gated Community</option>
              </select>
            </div>

            {[
              { t: "BOOK YOUR DREAM SPACE", primary: true },
              { t: "SCHEDULE A VISIT", primary: false },
            ].map((b, i) => (
              <button
                key={b.t}
                type="submit"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`group relative mb-4 flex w-full items-center justify-between overflow-hidden border px-8 py-5 font-cinzel text-xs tracking-[0.3em] transition-all duration-500 ${
                  b.primary
                    ? "border-gold bg-gradient-to-r from-[oklch(0.82_0.13_82)] to-[oklch(0.88_0.08_88)] text-ink hover:shadow-[0_0_60px_oklch(0.82_0.13_82/0.5)]"
                    : "border-bone/20 text-bone hover:border-gold hover:text-gold"
                }`}
              >
                <span className="relative z-10">{b.t}</span>
                <span className={`relative z-10 transition-transform duration-500 ${hover === i ? "translate-x-2" : ""}`}>→</span>
              </button>
            ))}

            <div className="mt-8 flex gap-4 border-t border-bone/10 pt-6">
              {["WhatsApp", "Instagram", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="font-cinzel text-[10px] tracking-widest text-bone/50 transition-colors hover:text-gold">{s.toUpperCase()}</a>
              ))}
            </div>
          </motion.form>

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between"
          >
            <div className="glass-gold rounded-sm p-10 md:p-12">
              <p className="font-cinzel text-[10px] tracking-widest text-gold">◆  CORPORATE OFFICE</p>
              <p className="mt-6 font-display text-4xl text-bone">RKM Projects</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">
                Flat No. 302, Third Floor,<br/>
                Sirul Next, Beverely Hill, Guttala,<br/>
                Begumpet, Madhapur,<br/>
                Hyderabad, Telangana — 500 081
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-gold/20 pt-6">
                <div>
                  <p className="font-cinzel text-[10px] tracking-widest text-bone/50">CALL</p>
                  <p className="mt-1 font-display text-lg text-bone">+91 92475 82271</p>
                  <p className="font-display text-lg text-bone">+91 92475 82272</p>
                </div>
                <div>
                  <p className="font-cinzel text-[10px] tracking-widest text-bone/50">WRITE</p>
                  <p className="mt-1 font-display text-base text-bone">rkmprojects.hyd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Stylized map */}
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-sm border border-gold/20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, oklch(0.32 0.13 18 / 0.6), transparent 50%), linear-gradient(135deg, oklch(0.16 0.02 20), oklch(0.22 0.08 17))",
                }}
              />
              <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 250">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="250" stroke="oklch(0.82 0.13 82 / 0.3)" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={i} x1="0" y1={i * 35} x2="400" y2={i * 35} stroke="oklch(0.82 0.13 82 / 0.3)" strokeWidth="0.5" />
                ))}
              </svg>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_20px_oklch(0.82_0.13_82/0.8)]"
              />
              <div className="absolute bottom-4 left-4 font-cinzel text-[9px] tracking-widest text-gold/70">17.4239°N · 78.4738°E</div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="mt-32 overflow-hidden border-y border-gold/20 py-8">
          <div className="animate-ticker flex whitespace-nowrap font-display text-6xl italic text-bone/30 md:text-8xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="px-12">
                Crafting Luxury Living <span className="gold-text not-italic">◆</span> Crafting Luxury Living <span className="gold-text not-italic">◆</span>{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
