export default function ProcessSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <p className="text-xs tracking-[0.2em] text-center mb-4 uppercase text-muted-foreground">OUR PROCESS</p>
        <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal">From brief to live website in 4 steps</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        <div className="liquid-glass rounded-2xl p-8 relative">
          <span className="absolute top-6 right-8 text-7xl font-light select-none font-serif" style={{ color: 'rgba(255,255,255,0.08)' }}>01</span>
          <svg width="40" height="40" viewBox="0 0 40 40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none">
            <path d="M4 6C4 4.9 4.9 4 6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H14L10 24V20H6C4.9 20 4 19.1 4 18V6Z"/>
            <path d="M16 16C16 14.9 16.9 14 18 14H30C31.1 14 32 14.9 32 16V26C32 27.1 31.1 28 30 28H26V32L22 28H18C16.9 28 16 27.1 16 26V16Z" stroke="rgba(255,255,255,0.3)"/>
          </svg>
          <h3 className="text-xl text-white mt-8 mb-2 font-medium">Discovery Call</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">Free 30-min call. We learn about your business, goals, and timeline.</p>
        </div>

        <div className="liquid-glass rounded-2xl p-8 relative">
          <span className="absolute top-6 right-8 text-7xl font-light select-none font-serif" style={{ color: 'rgba(255,255,255,0.08)' }}>02</span>
          <svg width="40" height="40" viewBox="0 0 40 40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none">
            <path d="M8 32L6 36L10 34L8 32Z"/>
            <path d="M8 32L28 12L32 16L12 36"/>
            <line x1="4" y1="6" x2="36" y2="6"/>
            <line x1="4" y1="6" x2="4" y2="34"/>
            <line x1="4" y1="10" x2="8" y2="10"/>
            <line x1="4" y1="18" x2="8" y2="18"/>
            <line x1="4" y1="26" x2="8" y2="26"/>
          </svg>
          <h3 className="text-xl text-white mt-8 mb-2 font-medium">Design & Approval</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">We create wireframes and design mockups. You review and approve.</p>
        </div>

        <div className="liquid-glass rounded-2xl p-8 relative">
          <span className="absolute top-6 right-8 text-7xl font-light select-none font-serif" style={{ color: 'rgba(255,255,255,0.08)' }}>03</span>
          <svg width="40" height="40" viewBox="0 0 40 40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none">
            <path d="M14 12L6 20L14 28" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26 12L34 20L26 28" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="20" r="4"/>
            <path d="M20 14V16M20 24V26M14 20H16M24 20H26"/>
          </svg>
          <h3 className="text-xl text-white mt-8 mb-2 font-medium">Development</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">Your site is built, tested across all devices and browsers.</p>
        </div>

        <div className="liquid-glass rounded-2xl p-8 relative">
          <span className="absolute top-6 right-8 text-7xl font-light select-none font-serif" style={{ color: 'rgba(255,255,255,0.08)' }}>04</span>
          <svg width="40" height="40" viewBox="0 0 40 40" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none">
            <path d="M20 6C20 6 28 10 30 20C30 20 24 22 20 18C16 22 10 20 10 20C12 10 20 6 20 6Z"/>
            <path d="M16 22L12 26L14 28L18 24"/>
            <path d="M24 22L28 26L26 28L22 24"/>
            <circle cx="20" cy="18" r="2.5" stroke="rgba(255,255,255,0.3)"/>
            <path d="M20 4V6M18 4L20 6L22 4" strokeLinecap="round"/>
          </svg>
          <h3 className="text-xl text-white mt-8 mb-2 font-medium">Launch & Handover</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">We go live, hand over all credentials, and train you on the CMS.</p>
        </div>
      </div>
    </section>
  );
}