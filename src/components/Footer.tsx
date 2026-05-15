export function Footer() {
  return (
    <footer className="border-t border-bone/10 py-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl gold-text">RKM</span>
          <span className="font-cinzel text-[9px] text-bone/40">PROJECTS · EST. 2014</span>
        </div>
        <p className="font-cinzel text-[10px] tracking-widest text-bone/40">© {new Date().getFullYear()} RKM PROJECTS · ALL RIGHTS RESERVED</p>
        <p className="font-cinzel text-[10px] tracking-widest text-bone/40">RERA · IGBC · CRISIL A+</p>
      </div>
    </footer>
  );
}
