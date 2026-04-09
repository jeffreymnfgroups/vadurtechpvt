export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="liquid-glass rounded-3xl p-12 md:p-16 text-center border border-white/20">
        <div className="mx-auto flex justify-center">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30 4L52 16V40L30 52L8 40V16L30 4Z" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1"/>
            <rect x="16" y="18" width="28" height="18" rx="2" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1.5"/>
            <rect x="20" y="21" width="20" height="12" rx="1" fill="rgba(255,255,255,0.07)"/>
            <rect x="24" y="37" width="12" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
            <line x1="22" y1="40" x2="38" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl text-white mt-6 font-serif font-normal">Ready to launch your website?</h2>
        <p className="text-lg mt-4 text-muted-foreground">Get a free quote and website proposal within 24 hours. No obligation.</p>
        
        <div className="flex gap-4 mt-10 justify-center flex-wrap">
          <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-12 py-5 text-white text-base hover:scale-[1.03] transition-transform cursor-pointer flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
              <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
              <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
            </svg>
            WhatsApp Us Now
          </a>
          <a href="mailto:hello@vadurtech.com.my" className="border border-white/20 rounded-full px-10 py-5 text-sm hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-muted-foreground">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M1 5L8 9.5L15 5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            hello@vadurtech.com.my
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 pt-14 border-t border-white/10">
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 20 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none">
              <path d="M10 2C7.2 2 5 4.2 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.2 12.8 2 10 2Z"/>
              <circle cx="10" cy="7" r="2"/>
            </svg>
            Kuala Lumpur, Malaysia
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 20 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none">
              <path d="M4 4C4 4 5 3 6 4L8 7C8 7 9 8 8 9L7 10C7 10 9 12 10 13C11 14 13 16 13 16L14 15C15 14 16 15 16 15L19 17C20 18 19 19 19 19C19 19 17 21 14 19C11 17 6 12 4 9C2 6 4 4 4 4Z"/>
            </svg>
            <a href="tel:+601151121248" className="hover:text-white transition-colors">
              +60 11-5112 1248
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 20 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none">
              <circle cx="10" cy="10" r="8"/>
              <line x1="10" y1="6" x2="10" y2="10"/>
              <line x1="10" y1="10" x2="14" y2="12"/>
            </svg>
            Mon–Fri, 9am–6pm MYT
          </div>
        </div>
      </div>
    </section>
  );
}