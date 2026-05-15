import logo from "@/assets/rkm-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 py-14">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RKM Projects" className="h-12 w-12 rounded-sm object-cover ring-1 ring-gold/30" />
            <div>
              <p className="font-display text-2xl gold-text">RKM Projects</p>
              <p className="font-cinzel text-[9px] tracking-[0.3em] text-bone/40">CRAFTING LUXURY LIVING · SINCE 2011</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/55">
            A Ravi Melodies venture led by RaviKumar Manda. Building signature residences across Andhra & Telangana, with a global NRI investor network spanning 40 countries.
          </p>
        </div>
        <div>
          <p className="font-cinzel text-[10px] tracking-widest text-gold/70">CORPORATE OFFICE</p>
          <p className="mt-3 text-sm leading-relaxed text-bone/70">
            Flat No. 302, Third Floor,<br/>
            Sirul Next, Beverely Hill, Guttala,<br/>
            Begumpet, Madhapur,<br/>
            Hyderabad, Telangana — 500 081
          </p>
        </div>
        <div>
          <p className="font-cinzel text-[10px] tracking-widest text-gold/70">CONTACT</p>
          <p className="mt-3 text-sm text-bone/70">+91 92475 82271</p>
          <p className="text-sm text-bone/70">+91 92475 82272</p>
          <p className="mt-2 text-sm text-bone/70">rkmprojects.hyd@gmail.com</p>
          <p className="text-sm text-bone/70">www.rkmprojects.com</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1600px] flex-col items-center justify-between gap-3 border-t border-bone/10 px-6 pt-6 md:flex-row md:px-10">
        <p className="font-cinzel text-[10px] tracking-widest text-bone/40">© {new Date().getFullYear()} RKM PROJECTS · ALL RIGHTS RESERVED</p>
        <p className="font-cinzel text-[10px] tracking-widest text-bone/40">RERA REGISTERED · NRI WING · TRUSTED SINCE 2011</p>
      </div>
    </footer>
  );
}
