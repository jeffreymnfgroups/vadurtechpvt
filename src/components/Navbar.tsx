import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <Logo size={28} />
        <div className="text-2xl tracking-tight text-white font-serif">
          <a href="#">
            VadurTech<sup className="text-xs font-sans ml-0.5">®</sup>
          </a>
        </div>
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#" className="text-sm text-white hover:text-white transition-colors">Home</a>
        <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">Services</a>
        <a href="#pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">Pricing</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
      </div>
      <div className="hidden md:block">
        <a href="#contact" className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform cursor-pointer block">
          Get Free Quote
        </a>
      </div>
      <button className="md:hidden text-white hover:opacity-80 transition-opacity">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <line x1="2" y1="5" x2="22" y2="5" stroke="white" strokeWidth="1.5" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" />
          <line x1="2" y1="19" x2="22" y2="19" stroke="white" strokeWidth="1.5" />
        </svg>
      </button>
    </nav>
  );
}