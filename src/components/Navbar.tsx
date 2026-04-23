import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-glass py-3 shadow-lg"
          : "py-6"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <div className="text-2xl tracking-tight text-white font-serif">
            <a href="#" onClick={(e) => handleNav(e, "#")}>
              VadurTech<sup className="text-xs font-sans ml-0.5">®</sup>
            </a>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" onClick={(e) => handleNav(e, "#")} className="text-sm text-white hover:text-white transition-colors">Home</a>
          <a href="#services" onClick={(e) => handleNav(e, "#services")} className="text-sm text-white/60 hover:text-white transition-colors">Services</a>
          <a href="#pricing" onClick={(e) => handleNav(e, "#pricing")} className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
          <a href="#process" onClick={(e) => handleNav(e, "#process")} className="text-sm text-white/60 hover:text-white transition-colors">Process</a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform cursor-pointer block">
            Get Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:opacity-80 transition-opacity relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="22" y2="6" stroke="white" strokeWidth="1.5" />
                <line x1="6" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" />
                <line x1="10" y1="18" x2="22" y2="18" stroke="white" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: 'rgba(0, 20, 40, 0.97)', backdropFilter: 'blur(24px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="#" onClick={(e) => handleNav(e, "#")} className="text-2xl text-white font-serif hover:opacity-80 transition-opacity">Home</a>
          <a href="#services" onClick={(e) => handleNav(e, "#services")} className="text-2xl text-white/70 font-serif hover:text-white transition-colors">Services</a>
          <a href="#pricing" onClick={(e) => handleNav(e, "#pricing")} className="text-2xl text-white/70 font-serif hover:text-white transition-colors">Pricing</a>
          <a href="#process" onClick={(e) => handleNav(e, "#process")} className="text-2xl text-white/70 font-serif hover:text-white transition-colors">Process</a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="text-2xl text-white/70 font-serif hover:text-white transition-colors">Contact</a>
          <div className="mt-4">
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="liquid-glass rounded-full px-10 py-4 text-base text-white">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}