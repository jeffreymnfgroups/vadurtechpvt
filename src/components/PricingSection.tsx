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
  const [isEcommerce, setIsEcommerce] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center">
        <p className="text-xs tracking-[0.2em] text-center mb-4 uppercase text-muted-foreground">TRANSPARENT PRICING</p>
        <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal">Website design packages for local businesses</h2>
        <p className="text-center mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">No hidden fees. No monthly lock-ins. Quoted in Ringgit Malaysia.</p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className={!isEcommerce ? "text-white" : "text-muted-foreground"}>Website</span>
        <div
          className="liquid-glass rounded-full w-12 h-6 relative cursor-pointer"
          onClick={() => setIsEcommerce(!isEcommerce)}
        >
          <div
            className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform"
            style={{ transform: isEcommerce ? 'translateX(24px)' : 'translateX(0)' }}
          />
        </div>
        <span className={isEcommerce ? "text-white" : "text-muted-foreground"}>E-Commerce</span>
      </div>

      {!isEcommerce ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="liquid-glass rounded-3xl p-10 border border-white/20">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <rect x="4" y="6" width="40" height="28" rx="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <rect x="8" y="10" width="32" height="20" rx="2" fill="rgba(255,255,255,0.07)" />
              <rect x="18" y="36" width="12" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
              <line x1="14" y1="40" x2="34" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
            <span className="liquid-glass rounded-full px-4 py-1 text-xs mt-4 inline-block text-muted-foreground">Best for New Businesses</span>
            <h3 className="text-3xl text-white mt-4 font-serif">Starter</h3>
            <p className="text-5xl font-light text-white mt-4">RM 1,200</p>
            <p className="text-sm mt-2 text-muted-foreground">one-time · no monthly fee</p>
            <div className="border-t border-white/10 my-8" />
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 5 pages — Home, About, Services, Gallery, Contact</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Mobile-responsive design</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Contact form with WhatsApp integration</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Basic on-page SEO (meta tags, sitemap)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Google Maps embed</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year .com.my or .my domain included</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year shared hosting included</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> SSL certificate (HTTPS)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 30 days post-launch support</p>
            </div>
            <div className="space-y-3 mt-6 pt-6 border-t border-white/10">
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> E-commerce / online payments</p>
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> Blog or CMS</p>
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> Custom animations</p>
            </div>
            <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer block">
              Get Started — RM 1,200
            </button>
            <p className="text-xs text-center mt-4 text-muted-foreground">Delivered in 7–14 working days</p>
          </div>

          <div className="liquid-glass rounded-3xl p-10 border-2 border-white/40 relative !overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-fit">
            <div className="liquid-glass rounded-full px-5 py-2 text-[10px] tracking-[0.2em] uppercase text-white font-semibold flex items-center justify-center gap-2 border border-white/40 bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] whitespace-nowrap">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="flex-shrink-0 animate-pulse">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Most Popular
            </div>
          </div>
            <svg width="48" height="48" viewBox="0 0 48 48">
              <rect x="4" y="6" width="40" height="28" rx="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <rect x="8" y="10" width="32" height="20" rx="2" fill="rgba(255,255,255,0.07)" />
              <rect x="18" y="36" width="12" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
              <line x1="14" y1="40" x2="34" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M42 3 L43 6 L46 7 L43 8 L42 11 L41 8 L38 7 L41 6 Z" stroke="rgba(255,255,255,0.6)" fill="none" strokeWidth="1" />
            </svg>

            <h3 className="text-3xl text-white mt-4 font-serif">Professional</h3>
            <p className="text-5xl font-light text-white mt-4">RM 2,800</p>
            <p className="text-sm mt-2 text-muted-foreground">one-time · no monthly fee</p>
            <div className="border-t border-white/10 my-8" />
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 10 pages — full company profile</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Custom UI/UX design (not a template)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Mobile + tablet responsive</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> CMS — update content yourself, no coding</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Blog / News section</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> WhatsApp Live Chat widget</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Advanced SEO — keyword research + schema markup</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Google Analytics + Search Console setup</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Social media links + Open Graph tags</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Page speed optimisation</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year .com.my or .my domain included</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year cloud hosting included</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> SSL certificate (HTTPS)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 60 days post-launch support</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 free revision round</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/15">
              <p className="text-xs tracking-widest uppercase mb-4 text-muted-foreground">OPTIONAL ADD-ONS</p>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Multilingual (Bahasa + English)
                </span>
                <span className="text-muted-foreground">RM 600</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Custom email setup
                </span>
                <span className="text-muted-foreground">RM 150</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Logo design
                </span>
                <span className="text-muted-foreground">RM 400</span>
              </div>
            </div>
            <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer block">
              Get Started — RM 2,800
            </button>
            <p className="text-xs text-center mt-4 text-muted-foreground">Delivered in 14–21 working days · Free consultation included</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="liquid-glass rounded-3xl p-10 border border-white/20">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path d="M12 16L10 20H38L36 16L34 8H14L12 16Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <path d="M18 8Q24 2 30 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <line x1="16" y1="16" x2="32" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
            <span className="liquid-glass rounded-full px-4 py-1 text-xs mt-4 inline-block text-muted-foreground">Best for First Online Store</span>
            <h3 className="text-3xl text-white mt-4 font-serif">E-Commerce Starter</h3>
            <p className="text-5xl font-light text-white mt-4">RM 2,500</p>
            <p className="text-sm mt-2 text-muted-foreground">one-time · no monthly fee</p>
            <div className="border-t border-white/10 my-8" />
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> WooCommerce store on WordPress</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 30 products with variants (size, colour)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> FPX / DuitNow / credit card via Billplz or iPay88</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Product categories and search</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Mobile-responsive storefront</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Shopping cart + checkout flow</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Order confirmation emails</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Basic inventory management</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Admin dashboard training (1 hour Zoom)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year .com.my domain + hosting included</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> SSL certificate</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 30 days support</p>
            </div>
            <div className="space-y-3 mt-6 pt-6 border-t border-white/10">
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> Shopify platform</p>
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> Custom design (uses premium template)</p>
              <p className="flex items-center gap-3 text-sm line-through text-muted-foreground"><XIcon /> Blog / CMS</p>
            </div>
            <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer block">
              Get Started — RM 2,500
            </button>
            <p className="text-xs text-center mt-4 text-muted-foreground">Delivered in 14–21 working days</p>
          </div>

          <div className="liquid-glass rounded-3xl p-10 border-2 border-white/40 relative !overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-fit">
            <div className="liquid-glass rounded-full px-5 py-2 text-[10px] tracking-[0.2em] uppercase text-white font-semibold flex items-center justify-center gap-2 border border-white/40 bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] whitespace-nowrap">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="flex-shrink-0 animate-pulse">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Most Popular
            </div>
          </div>
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path d="M12 16L10 20H38L36 16L34 8H14L12 16Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <path d="M18 8Q24 2 30 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
              <line x1="16" y1="16" x2="32" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M42 3 L43 6 L46 7 L43 8 L42 11 L41 8 L38 7 L41 6 Z" stroke="rgba(255,255,255,0.6)" fill="none" strokeWidth="1" />
            </svg>

            <h3 className="text-3xl text-white mt-4 font-serif">E-Commerce Pro</h3>
            <p className="text-5xl font-light text-white mt-4">RM 4,800</p>
            <p className="text-sm mt-2 text-muted-foreground">one-time · no monthly fee</p>
            <div className="border-t border-white/10 my-8" />
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> WooCommerce or Shopify (client's choice)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Up to 200 products with variants</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Custom UI/UX design (not a template)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> FPX / DuitNow / credit card / e-wallet (Touch 'n Go, GrabPay)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Promo codes and discount engine</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Customer accounts + order history</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Abandoned cart recovery emails</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Product reviews and ratings</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Blog / content section</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Google Shopping feed integration</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Facebook / Instagram shop integration</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> WhatsApp order notification</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Advanced analytics (GA4 + Meta Pixel)</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> Admin dashboard full training</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 year domain + cloud hosting</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> SSL certificate</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 60 days post-launch support</p>
              <p className="flex items-start gap-3 text-sm text-white/80"><CheckIcon /> 1 free revision round</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/15">
              <p className="text-xs tracking-widest uppercase mb-4 text-muted-foreground">OPTIONAL ADD-ONS</p>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Malay + English language toggle
                </span>
                <span className="text-muted-foreground">RM 800</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Subscription / recurring billing
                </span>
                <span className="text-muted-foreground">RM 1,200</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="flex items-center gap-2 text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.4"><line x1="6" y1="1" x2="6" y2="11" /><line x1="1" y1="6" x2="11" y2="6" /></svg>
                  Custom mobile app (PWA)
                </span>
                <span className="text-muted-foreground">RM 2,000</span>
              </div>
            </div>
            <button className="liquid-glass rounded-full w-full py-4 text-center text-white text-sm mt-10 hover:scale-[1.02] transition-transform cursor-pointer block">
              Get Started — RM 4,800
            </button>
            <p className="text-xs text-center mt-4 text-muted-foreground">Delivered in 21–30 working days · Free consultation included</p>
          </div>
        </div>
      )}

      <p className="text-sm text-center mt-10 text-muted-foreground flex items-center justify-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
          <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
          <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
        </svg>
        Not sure which package fits your business? <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition-colors">WhatsApp us at +60 11-5112 1248</a> for a free 30-min consultation.
      </p>
    </section>
  );
}