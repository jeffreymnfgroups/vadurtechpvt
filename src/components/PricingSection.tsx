import { useReveal } from "@/hooks/useReveal";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
      <path d="M5 8l2 2 4-4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PopularCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.06)" />
      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="pricing" className="py-28 px-6 max-w-[90rem] mx-auto">
      <div ref={sectionRef} className="reveal">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.25em] text-center mb-4 uppercase text-white/40 font-medium">WEB DEVELOPMENT SOLUTIONS</p>
          <h2 className="text-4xl md:text-6xl text-white text-center font-serif font-normal">Choose Your Growth Plan</h2>
          <p className="text-center mt-5 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">Premium digital solutions tailored for Malaysian businesses. Professional, fast, and secure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {/* SINGLE PAGE Starter */}
          <div className="liquid-glass rounded-3xl p-7 border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-block text-[10px] font-medium text-white/30 uppercase tracking-[0.15em] mb-2 border border-white/10 rounded-full px-3 py-1">Entry Tier</span>
              <h3 className="text-xl text-white font-serif mb-2 mt-3">Single Page Starter</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl text-white font-light tracking-tight">RM 399</span>
                <span className="text-xs text-white/40">/Yearly</span>
              </div>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />
            
            <div className="space-y-3.5 flex-grow">
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 5 Sections (Home, About, Services, Gallery - 5 pics, Contact)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Mobile responsive layout</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> FREE sharing Company Domain setup</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 1-Year Hosting included</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> WhatsApp integration</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Use own domain (.MY, .COM.MY, .COM, .BZS)</p>
            </div>

            <a
              href="https://wa.me/601151121248?text=Hi%20VadurTech%2C%20I%E2%80%99m%20interested%20in%20the%20*Single%20Page%20Starter*%20plan%20(RM%20399%2FYearly).%20Could%20you%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-xl w-full py-3.5 text-center text-white/80 text-xs mt-8 hover:bg-white/5 hover:text-white transition-all cursor-pointer border border-white/10 group-hover:border-white/20 block"
            >
              Select Plan
            </a>
          </div>

          {/* SINGLE PAGE Pro — POPULAR */}
          <div className="liquid-glass pricing-popular rounded-3xl p-7 relative flex flex-col shadow-2xl lg:-my-3">
            {/* Badge - fixed positioning */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 blur-xl rounded-full" />
                <div className="relative bg-white text-[#001428] text-[10px] tracking-[0.15em] uppercase px-5 py-1.5 rounded-full font-bold shadow-[0_4px_20px_rgba(255,255,255,0.25)] whitespace-nowrap">
                  ★ Popular Choice
                </div>
              </div>
            </div>

            <div className="mb-6 mt-3">
              <span className="inline-block text-[10px] font-medium text-white/50 uppercase tracking-[0.15em] mb-2 border border-white/15 rounded-full px-3 py-1 bg-white/5">Advanced Tier</span>
              <h3 className="text-xl text-white font-serif mb-2 mt-3">Single Page Pro</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl text-white font-light tracking-tight">RM 699</span>
                <span className="text-xs text-white/40">/Yearly</span>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-4" />

            <div className="space-y-3.5 flex-grow">
              <p className="flex items-start gap-2.5 text-xs text-white/90 leading-relaxed font-medium"><PopularCheckIcon /> All Starter features, plus:</p>
              <p className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed"><PopularCheckIcon /> 5 Sections (10 Gallery Pictures)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed"><PopularCheckIcon /> Domain name setup (.MY, .COM.MY, .COM, .BZS)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed"><PopularCheckIcon /> SSL Certificate (HTTPS)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed"><PopularCheckIcon /> Enhanced security patch</p>
            </div>

            <a
              href="https://wa.me/601151121248?text=Hi%20VadurTech%2C%20I%E2%80%99m%20interested%20in%20the%20*Single%20Page%20Pro*%20plan%20(RM%20699%2FYearly).%20I%E2%80%99d%20like%20to%20get%20started!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001428] font-bold rounded-xl w-full py-3.5 text-center text-xs mt-8 hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all cursor-pointer block"
            >
              Get Pro Now
            </a>
          </div>

          {/* MULTI-PAGE Business */}
          <div className="liquid-glass rounded-3xl p-7 border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-block text-[10px] font-medium text-white/30 uppercase tracking-[0.15em] mb-2 border border-white/10 rounded-full px-3 py-1">Professional Tier</span>
              <h3 className="text-xl text-white font-serif mb-2 mt-3">Multi-Page Business</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl text-white font-light tracking-tight">RM 2499</span>
                <span className="text-xs text-white/40">/Yearly</span>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

            <div className="space-y-3.5 flex-grow">
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Up to 5 Pages (Home, About, Services, Product, Portfolio, Contact)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Product Showcase (20 photos)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 1-Year Domain (.MY, .COM.MY, .COM, .BZS)</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 1-Year Free Hosting</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 1-Year SSL Certificate</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Mobile responsive layout</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> WhatsApp Integrated</p>
            </div>

            <a
              href="https://wa.me/601151121248?text=Hi%20VadurTech%2C%20I%E2%80%99m%20interested%20in%20the%20*Multi-Page%20Business*%20plan%20(RM%202499%2FYearly).%20Please%20share%20more%20info."
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-xl w-full py-3.5 text-center text-white/80 text-xs mt-8 hover:bg-white/5 hover:text-white transition-all cursor-pointer border border-white/10 group-hover:border-white/20 block"
            >
              Choose Business
            </a>
          </div>

          {/* CUSTOM Enterprise */}
          <div className="liquid-glass rounded-3xl p-7 border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-block text-[10px] font-medium text-white/30 uppercase tracking-[0.15em] mb-2 border border-white/10 rounded-full px-3 py-1">Bespoke Solution</span>
              <h3 className="text-xl text-white font-serif mb-2 mt-3">Custom Design</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl text-white font-normal uppercase tracking-wide">Contact Us</span>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

            <div className="space-y-3.5 flex-grow">
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Unlimited Pages & Design</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Professional Photo & Video production</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Dedicated Graphics Designer</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 3-Year Domain & Hosting setup</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> 3-Year SSL Certificate</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> FREE 1-Year Maintenance</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Integrated Social Media</p>
              <p className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed"><CheckIcon /> Everything Premium included</p>
            </div>

            <a
              href="https://wa.me/601151121248?text=Hi%20VadurTech%2C%20I%E2%80%99m%20interested%20in%20a%20*Custom%20Website%20Design*.%20Can%20we%20discuss%20my%20project%20requirements%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-xl w-full py-3.5 text-center text-white/80 text-xs mt-8 hover:bg-white/10 hover:text-white transition-all cursor-pointer border border-white/15 group-hover:border-white/25 block"
            >
              Inquiry via WhatsApp
            </a>
          </div>
        </div>

        {/* SEO & Features Summary */}
        <div className="mt-20 liquid-glass rounded-3xl p-10 max-w-4xl mx-auto border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Google Analytics</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">Tracking & ROI</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeOpacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Google Search Console</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">SEO Monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeOpacity="0.5" />
                  <circle cx="12" cy="10" r="3" strokeOpacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Google Map Profile</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">Local Visibility</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/8 text-center">
            <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-medium leading-relaxed">
              IMPORTANT: EVERY YEAR RENEWS FOR MAINTENANCE AND DOMAIN
            </p>
          </div>
        </div>

        <p className="text-sm text-center mt-14 text-white/40 flex flex-col md:flex-row items-center justify-center gap-2">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
              <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
              <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
            </svg>
            Need a custom quote?
          </span>
          <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition-colors">WhatsApp us at +60 11-5112 1248</a>
        </p>
      </div>
    </section>
  );
}