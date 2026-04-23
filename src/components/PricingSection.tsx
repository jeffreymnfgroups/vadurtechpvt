import { useState } from "react";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
      <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
      <path d="M5 8l2 2 4-4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0">
      <path d="M5 5l6 6M11 5l-6 6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-[90rem] mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-center mb-4 uppercase text-muted-foreground">WEB DEVELOPMENT SOLUTIONS</p>
        <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal">Choose Your Growth Plan</h2>
        <p className="text-center mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Premium digital solutions tailored for Malaysian businesses. Professional, fast, and secure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {/* SINGLE PAGE Starter */}
        <div className="liquid-glass rounded-3xl p-6 border border-white/10 flex flex-col hover:border-white/20 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1 block">Entry Tier</span>
            <h3 className="text-xl text-white font-serif mb-1">Single Page Starter</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-white font-light">RM 399</span>
              <span className="text-xs text-muted-foreground">/Yearly</span>
            </div>
          </div>
          
          <div className="border-t border-white/5 my-4" />
          
          <div className="space-y-3 flex-grow">
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 5 Sections (Home, About, Services, Gallery - 5 pics, Contact)</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Mobile responsive layout</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> FREE sharing Company Domain setup</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 1-Year Hosting included</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> WhatsApp integration</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Use own domain (.MY, .COM.MY, .COM, .BZS)</p>
          </div>

          <button className="liquid-glass rounded-xl w-full py-3 text-center text-white text-xs mt-8 hover:bg-white/5 transition-all cursor-pointer border border-white/10">
            Select Plan
          </button>
        </div>

        {/* SINGLE PAGE Pro */}
        <div className="liquid-glass rounded-3xl p-6 border-2 border-white/20 relative flex flex-col shadow-xl bg-white/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-white text-black text-[9px] tracking-widest uppercase px-3 py-1 rounded-full font-bold shadow-lg">
              Popular Choice
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1 block">Advanced Tier</span>
            <h3 className="text-xl text-white font-serif mb-1">Single Page Pro</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-white font-light">RM 699</span>
              <span className="text-xs text-muted-foreground">/Yearly</span>
            </div>
          </div>

          <div className="border-t border-white/5 my-4" />

          <div className="space-y-3 flex-grow">
            <p className="flex items-start gap-2 text-xs text-white/90 leading-relaxed font-medium"><CheckIcon /> All Starter features, plus:</p>
            <p className="flex items-start gap-2 text-xs text-white/80 leading-relaxed"><CheckIcon /> 5 Sections (10 Gallery Pictures)</p>
            <p className="flex items-start gap-2 text-xs text-white/80 leading-relaxed"><CheckIcon /> Domain name setup (.MY, .COM.MY, .COM, .BZS)</p>
            <p className="flex items-start gap-2 text-xs text-white/80 leading-relaxed"><CheckIcon /> SSL Certificate (HTTPS)</p>
            <p className="flex items-start gap-2 text-xs text-white/80 leading-relaxed"><CheckIcon /> Enhanced security patch</p>
          </div>

          <button className="bg-white text-black font-bold rounded-xl w-full py-3 text-center text-xs mt-8 hover:scale-[1.02] transition-transform cursor-pointer">
            Get Pro Now
          </button>
        </div>

        {/* MULTI-PAGE Business */}
        <div className="liquid-glass rounded-3xl p-6 border border-white/10 flex flex-col hover:border-white/20 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1 block">Professional Tier</span>
            <h3 className="text-xl text-white font-serif mb-1">Multi-Page Business</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-white font-light">RM 2499</span>
              <span className="text-xs text-muted-foreground">/Yearly</span>
            </div>
          </div>

          <div className="border-t border-white/5 my-4" />

          <div className="space-y-3 flex-grow">
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Up to 5 Pages (Home, About, Services, Product, Portfolio, Contact)</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Product Showcase (20 photos)</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 1-Year Domain (.MY, .COM.MY, .COM, .BZS)</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 1-Year Free Hosting</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 1-Year SSL Certificate</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Mobile responsive layout</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> WhatsApp Integrated</p>
          </div>

          <button className="liquid-glass rounded-xl w-full py-3 text-center text-white text-xs mt-8 hover:bg-white/5 transition-all cursor-pointer border border-white/10">
            Choose Business
          </button>
        </div>

        {/* CUSTOM Enterprise */}
        <div className="liquid-glass rounded-3xl p-6 border border-white/10 flex flex-col hover:border-white/20 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1 block">Bespoke Solution</span>
            <h3 className="text-xl text-white font-serif mb-1">Custom Design</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-xl text-white font-normal uppercase">Contact Us</span>
            </div>
          </div>

          <div className="border-t border-white/5 my-4" />

          <div className="space-y-3 flex-grow">
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Unlimited Pages & Design</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Professional Photo & Video production</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Dedicated Graphics Designer</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 3-Year Domain & Hosting setup</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> 3-Year SSL Certificate</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> FREE 1-Year Maintenance</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Integrated Social Media</p>
            <p className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"><CheckIcon /> Everything Premium included</p>
          </div>

          <button className="liquid-glass rounded-xl w-full py-3 text-center text-white text-xs mt-8 hover:bg-white/10 transition-all cursor-pointer border border-white/20">
            Inquiry via WhatsApp
          </button>
        </div>
      </div>

      {/* SEO & Features Summary */}
      <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Google Analytics</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Tracking & ROI</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeOpacity="0.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Google Search Console</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">SEO Monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeOpacity="0.5" />
                <circle cx="12" cy="10" r="3" strokeOpacity="0.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Google Map Profile</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Local Visibility</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-[11px] text-white/50 uppercase tracking-[0.2em] font-medium leading-relaxed">
            IMPORTANT: EVERY YEAR RENEWS FOR MAINTENANCE AND DOMAIN
          </p>
        </div>
      </div>

      <p className="text-sm text-center mt-12 text-muted-foreground flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
            <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
            <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
          </svg>
          Need a custom quote?
        </span>
        <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition-colors">WhatsApp us at +60 11-5112 1248</a>
      </p>
    </section>
  );
}