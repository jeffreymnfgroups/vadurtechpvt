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
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-center mb-4 uppercase text-muted-foreground">TRANSPARENT PRICING</p>
        <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal">E-commerce Development Costs in Malaysia (2026)</h2>
        <p className="text-center mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Scalable solutions tailored for local and global markets. Quoted in Ringgit Malaysia.</p>
      </div>

      <div className="mb-20">
        <h3 className="text-center text-white/60 text-sm tracking-widest uppercase mb-10">Key Services Provided</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="liquid-glass p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" strokeOpacity="0.5" />
                <path d="M8 21h8M12 17v4" strokeOpacity="0.5" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Platform Development</h4>
            <p className="text-sm text-muted-foreground">Shopify, WooCommerce, Magento, and custom PHP solutions.</p>
          </div>
          <div className="liquid-glass p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M3 10h18M7 15h.01M11 15h.01" strokeOpacity="0.5" />
                <rect x="3" y="5" width="18" height="14" rx="2" strokeOpacity="0.5" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Payment & Shipping</h4>
            <p className="text-sm text-muted-foreground">Integration with local payment gateways (iPay88, Razer) and courier systems.</p>
          </div>
          <div className="liquid-glass p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeOpacity="0.5" />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">Optimization</h4>
            <p className="text-sm text-muted-foreground">Speed optimization, on-page SEO, and conversion rate optimization (CRO).</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        {/* Small/Basic Site */}
        <div className="liquid-glass rounded-3xl p-8 border border-white/20 flex flex-col">
          <span className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Entry Level</span>
          <h3 className="text-2xl text-white font-serif mb-2">Small/Basic Site</h3>
          <p className="text-4xl text-white font-light mb-1">RM 3k – 6k</p>
          <p className="text-sm text-muted-foreground mb-8">One-time investment</p>
          
          <div className="border-t border-white/10 my-6" />
          
          <div className="space-y-4 flex-grow">
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Shopify or WooCommerce setup</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Payment gateway (iPay88 / Razer)</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Local courier system integration</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Speed & Performance optimization</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Essential on-page SEO</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Mobile-responsive storefront</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 50 product listings</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> WhatsApp Order integration</p>
          </div>

          <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer">
            Inquiry Now
          </button>
        </div>

        {/* Mid-Scale Site */}
        <div className="liquid-glass rounded-3xl p-8 border-2 border-white/40 relative !overflow-visible flex flex-col shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-fit">
            <div className="liquid-glass rounded-full px-5 py-2 text-[10px] tracking-[0.2em] uppercase text-white font-semibold flex items-center justify-center gap-2 border border-white/40 bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] whitespace-nowrap">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="flex-shrink-0 animate-pulse">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Most Popular
            </div>
          </div>

          <span className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Recommended</span>
          <h3 className="text-2xl text-white font-serif mb-2">Mid-Scale Site</h3>
          <p className="text-4xl text-white font-light mb-1">RM 6k – 12k</p>
          <p className="text-sm text-muted-foreground mb-8">Best for growing brands</p>

          <div className="border-t border-white/10 my-6" />

          <div className="space-y-4 flex-grow">
            <p className="flex items-start gap-3 text-sm text-white/80 font-medium"><CheckIcon /> Everything in Basic, plus:</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Magento or Custom PHP solution</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Custom UI/UX Design (No templates)</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Advanced SEO & Keyword Research</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Conversion Rate Optimization (CRO)</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Abandoned Cart Recovery system</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Multi-currency & Language support</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 500 product listings</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> GA4 & Meta Pixel integration</p>
          </div>

          <button className="bg-white text-black font-semibold rounded-full w-full py-4 text-center text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Enterprise/Custom Site */}
        <div className="liquid-glass rounded-3xl p-8 border border-white/20 flex flex-col">
          <span className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Complex Systems</span>
          <h3 className="text-2xl text-white font-serif mb-2">Enterprise/Custom</h3>
          <p className="text-4xl text-white font-light mb-1">RM 12k – 20k+</p>
          <p className="text-sm text-muted-foreground mb-8">Unlimited possibilities</p>

          <div className="border-t border-white/10 my-6" />

          <div className="space-y-4 flex-grow">
            <p className="flex items-start gap-3 text-sm text-white/80 font-medium"><CheckIcon /> Everything in Mid-Scale, plus:</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> High-volume transaction handling</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Dedicated staging environment</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> API Integrations (ERP, CRM, POS)</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Custom functional modules</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 24/7 Priority technical support</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Unlimited product listings</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Dedicated Account Manager</p>
            <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Cloud infrastructure setup</p>
          </div>

          <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer">
            Contact Sales
          </button>
        </div>
      </div>

      <p className="text-sm text-center mt-16 text-muted-foreground flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
            <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
            <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
          </svg>
          Need a custom quote?
        </span>
        <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition-colors">WhatsApp us at +60 11-5112 1248</a> for a free 30-min consultation.
      </p>
    </section>
  );
}