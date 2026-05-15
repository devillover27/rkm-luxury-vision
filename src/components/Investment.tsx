import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (n) => setV(n) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{Math.round(v).toLocaleString()}{suffix}</span>;
}

export function Investment() {
  const [budget, setBudget] = useState(50);
  const projected = (budget * 1.22 ** 5).toFixed(1);

  return (
    <section id="investment" className="relative py-40 overflow-hidden bg-gradient-to-b from-ink via-maroon-deep/30 to-ink">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 font-cinzel text-[11px] tracking-[0.4em] text-gold/80">◆  THE INVESTMENT</p>
          <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
            Real estate that <span className="italic gold-text">compounds.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { n: 18, suf: "%", label: "Avg. Annual Appreciation", sub: "Across portfolio, last 5 years" },
            { n: 2400, suf: "Cr", label: "Assets Under Development", sub: "Pre-sold value, FY 24-25" },
            { n: 99, suf: "%", label: "Investor Retention", sub: "Repeat & referral business" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass rounded-sm p-10"
            >
              <p className="font-display text-7xl gold-text">
                <Counter to={s.n} suffix={s.suf} />
              </p>
              <p className="mt-4 font-cinzel text-xs tracking-widest text-bone/80">{s.label.toUpperCase()}</p>
              <p className="mt-2 text-xs text-bone/40">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 glass-gold rounded-sm p-10 md:p-16"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-cinzel text-[11px] tracking-[0.4em] text-gold">◆  PROJECTION CALCULATOR</p>
              <h3 className="mt-4 font-display text-4xl text-bone md:text-5xl">Your investment, in five years.</h3>
              <p className="mt-4 text-sm text-bone/60">Indicative projection at 22% CAGR based on portfolio average. Past performance is not a guarantee of future returns.</p>
            </div>
            <div>
              <div className="mb-6 flex items-baseline justify-between">
                <span className="font-cinzel text-xs text-bone/60">INVESTMENT</span>
                <span className="font-display text-3xl gold-text">₹{budget} Cr</span>
              </div>
              <input
                type="range"
                min={10}
                max={200}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-[oklch(0.82_0.13_82)]"
              />
              <div className="mt-10 border-t border-gold/20 pt-6">
                <p className="font-cinzel text-xs text-bone/60">PROJECTED VALUE (5Y)</p>
                <p className="mt-2 font-display text-6xl gold-text">₹{projected} Cr</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
