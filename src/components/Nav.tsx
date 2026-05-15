import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(0,0,0,0)", "rgba(15,8,10,0.7)"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(20px)"]);

  const items = ["Projects", "Experience", "Investment", "Journey", "Contact"];
  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-wide gold-text">RKM</span>
          <span className="font-cinzel text-[10px] text-bone/60">PROJECTS</span>
        </a>
        <nav className="hidden gap-10 md:flex">
          {items.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="font-cinzel text-[11px] text-bone/70 transition-colors hover:text-gold">
              {i.toUpperCase()}
            </a>
          ))}
        </nav>
        <a href="#contact" className="group relative overflow-hidden rounded-full border border-gold/40 px-5 py-2.5 font-cinzel text-[10px] text-gold">
          <span className="relative z-10">BOOK A VISIT</span>
          <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 group-hover:translate-x-0" />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-cinzel text-[10px] text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">BOOK A VISIT</span>
        </a>
      </div>
    </motion.header>
  );
}
