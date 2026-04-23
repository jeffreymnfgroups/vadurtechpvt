import { useReveal } from "@/hooks/useReveal";

export default function ServicesSection() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
      <div ref={sectionRef} className="reveal">
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] text-center mb-4 uppercase text-white/40 font-medium">
            OUR SPECIALISATION
          </p>
          <h2 className="text-4xl md:text-6xl text-white text-center font-serif font-normal">
            Two things. Done exceptionally well.
          </h2>
          <p className="text-center mt-5 max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            We don't do everything. We do websites and e-commerce — and we do them better than anyone else in Malaysia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="liquid-glass rounded-3xl p-10 border border-white/15 group">
            <svg width="100%" height="180" viewBox="0 0 400 180">
              <rect x="10" y="10" width="380" height="160" rx="12" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1"/>
              <rect x="10" y="10" width="380" height="28" rx="12" fill="rgba(255,255,255,0.06)"/>
              <rect x="10" y="28" width="380" height="10" fill="rgba(255,255,255,0.06)"/>
              <circle cx="30" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <circle cx="44" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <circle cx="58" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <rect x="10" y="38" width="70" height="132" fill="rgba(255,255,255,0.06)"/>
              <rect x="90" y="44" width="180" height="80" rx="4" fill="rgba(255,255,255,0.1)"/>
              <rect x="90" y="134" width="120" height="8" rx="2" fill="rgba(255,255,255,0.08)"/>
              <rect x="90" y="148" width="80" height="8" rx="2" fill="rgba(255,255,255,0.08)"/>
              <rect x="280" y="44" width="100" height="110" rx="4" fill="rgba(255,255,255,0.06)"/>
            </svg>
            <h3 className="text-2xl text-white mt-8 mb-3 font-serif group-hover:translate-x-1 transition-transform duration-300">Website Design</h3>
            <p className="text-sm leading-relaxed text-white/50">
              Custom-designed websites that represent your brand, load fast, and convert visitors into customers. Built for Malaysian SMEs, clinics, restaurants, retail shops, and service businesses.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <rect x="3" y="1" width="6" height="10" rx="1.5"/><circle cx="6" cy="9.5" r="0.5" fill="currentColor"/>
                </svg>
                Mobile Responsive
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <circle cx="5" cy="5" r="3.5"/><line x1="7.5" y1="7.5" x2="11" y2="11" strokeLinecap="round"/>
                </svg>
                SEO Ready
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M7 1L3 7H6.5L5 11L9 5H5.5L7 1Z" strokeLinejoin="round"/>
                </svg>
                Fast Loading
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M6 1C4 1 2.5 2.5 2.5 4.5C2.5 7 6 11 6 11C6 11 9.5 7 9.5 4.5C9.5 2.5 8 1 6 1Z"/><circle cx="6" cy="4.5" r="1.2"/>
                </svg>
                Google Maps
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M10 2H2C1.4 2 1 2.4 1 3V8C1 8.6 1.4 9 2 9H4L6 11L8 9H10C10.6 9 11 8.6 11 8V3C11 2.4 10.6 2 10 2Z"/>
                </svg>
                WhatsApp Button
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <rect x="2.5" y="5" width="7" height="6" rx="1"/><path d="M4 5V3.5C4 2.1 8 2.1 8 3.5V5"/>
                </svg>
                SSL Secured
              </span>
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-10 border border-white/15 group">
            <svg width="100%" height="180" viewBox="0 0 400 180">
              <rect x="10" y="10" width="380" height="160" rx="12" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1"/>
              <rect x="10" y="10" width="380" height="28" rx="12" fill="rgba(255,255,255,0.06)"/>
              <rect x="10" y="28" width="380" height="10" fill="rgba(255,255,255,0.06)"/>
              <circle cx="30" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <circle cx="44" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <circle cx="58" cy="24" r="4" fill="rgba(255,255,255,0.2)"/>
              <path d="M340 18 L344 18 L348 26 L336 26 L338 18" stroke="rgba(255,255,255,0.4)" fill="none" strokeWidth="1.2"/>
              <circle cx="339" cy="28" r="1.5" fill="rgba(255,255,255,0.3)"/>
              <circle cx="347" cy="28" r="1.5" fill="rgba(255,255,255,0.3)"/>
              <circle cx="348" cy="18" r="4" fill="rgba(255,255,255,0.3)"/>
              <rect x="25" y="48" width="83" height="70" rx="6" fill="rgba(255,255,255,0.07)"/>
              <rect x="118" y="48" width="83" height="70" rx="6" fill="rgba(255,255,255,0.07)"/>
              <rect x="211" y="48" width="83" height="70" rx="6" fill="rgba(255,255,255,0.07)"/>
              <rect x="304" y="48" width="76" height="70" rx="6" fill="rgba(255,255,255,0.07)"/>
              <rect x="130" y="132" width="140" height="26" rx="4" fill="rgba(255,255,255,0.12)"/>
              <text x="200" y="149" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="Inter">Add to Cart</text>
            </svg>
            <h3 className="text-2xl text-white mt-8 mb-3 font-serif group-hover:translate-x-1 transition-transform duration-300">E-Commerce Development</h3>
            <p className="text-sm leading-relaxed text-white/50">
              Full-featured online stores built on WooCommerce or Shopify. Product catalogues, checkout, payment gateway integration, and order management — ready for Malaysian buyers.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M1 1H3L4.5 8H9.5L11 3H3.5"/><circle cx="5" cy="10.5" r="0.8" fill="currentColor"/><circle cx="9" cy="10.5" r="0.8" fill="currentColor"/>
                </svg>
                WooCommerce / Shopify
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <rect x="1" y="3" width="10" height="7" rx="1"/><line x1="1" y1="5.5" x2="11" y2="5.5"/><line x1="3" y1="7.5" x2="5" y2="7.5"/>
                </svg>
                FPX / DuitNow
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M6 1L11 3.5V9L6 11L1 9V3.5L6 1Z"/><line x1="1" y1="3.5" x2="6" y2="6"/><line x1="11" y1="3.5" x2="6" y2="6"/><line x1="6" y1="6" x2="6" y2="11"/>
                </svg>
                Inventory Management
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <path d="M1 8V4H8V10H1"/><path d="M8 5H10L11 7V10H8"/><circle cx="3" cy="10" r="1" fill="none"/><circle cx="9.5" cy="10" r="1" fill="none"/>
                </svg>
                Shipping Integration
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <rect x="1" y="7" width="2.5" height="4"/><rect x="4.5" y="4" width="2.5" height="7"/><rect x="8" y="2" width="2.5" height="9"/><line x1="1" y1="11" x2="11" y2="11"/>
                </svg>
                Sales Dashboard
              </span>
              <span className="rounded-full px-4 py-1.5 text-xs border border-white/15 flex items-center gap-2 text-white/50 liquid-glass">
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4" fill="none">
                  <rect x="1" y="3" width="10" height="7" rx="1"/><path d="M1 4L6 7.5L11 4"/>
                </svg>
                Order Email Alerts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}