import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={24} />
              <div className="text-xl text-white font-serif tracking-tight">VadurTech®</div>
            </div>
            <p className="text-sm leading-relaxed mt-3 text-muted-foreground">Website design & e-commerce development for Malaysian businesses.</p>
            <p className="text-xs mt-4 text-muted-foreground">SSM Reg: 003XXXXXXX-X</p>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
                  <path d="M8 2C4.7 2 2 4.7 2 8C2 9.2 2.4 10.4 3 11.4L2 14L4.8 13.1C5.8 13.6 6.9 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z" />
                  <path d="M5.5 7.5C5.5 7.5 6 8.5 7 9.5C8 10.5 9 11 9 11L10.5 9.5L9 8.5L8.5 9C8.5 9 7.5 8.5 7 8C6.5 7.5 6 6.5 6 6.5L6.5 6L5.5 4.5L4 6C4 6 4.5 7 5.5 7.5Z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 18 18" stroke="rgba(255,255,255,0.4)" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M10 6H8.5C8 6 7.5 6.5 7.5 7V8.5H6.5V10H7.5V14H9.5V10H11L11.5 8.5H9.5V7.5C9.5 7.2 9.7 7 10 7H11.5V6H10Z" stroke="none" fill="rgba(255,255,255,0.4)"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 18 18" stroke="rgba(255,255,255,0.4)" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="3.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="13" cy="5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground">SERVICES</h4>
            <div className="space-y-3 flex flex-col">
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Website Design</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">E-Commerce Development</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Landing Pages</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Website Redesign</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground">COMPANY</h4>
            <div className="space-y-3 flex flex-col">
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">About Us</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Pricing</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Blog</a>
              <a href="#" className="text-sm hover:text-white transition-colors text-muted-foreground">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-muted-foreground">GET IN TOUCH</h4>
            <div className="flex items-start gap-2 text-sm mb-3 text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" fill="none" className="mt-0.5 flex-shrink-0">
                <path d="M10 2C7.2 2 5 4.2 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.2 12.8 2 10 2Z"/>
                <circle cx="10" cy="7" r="2"/>
              </svg>
              Kuala Lumpur, Malaysia
            </div>
            <div className="flex items-start gap-2 text-sm mb-3 text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" fill="none" className="mt-0.5 flex-shrink-0">
                <path d="M4 4C4 4 5 3 6 4L8 7C8 7 9 8 8 9L7 10C7 10 9 12 10 13C11 14 13 16 13 16L14 15C15 14 16 15 16 15L19 17C20 18 19 19 19 19C19 19 17 21 14 19C11 17 6 12 4 9C2 6 4 4 4 4Z"/>
              </svg>
            <a href="tel:+601151121248" className="hover:text-white transition-colors">
              +60 11-5112 1248
            </a>
            </div>
            <div className="flex items-start gap-2 text-sm mb-3 text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none" className="mt-0.5 flex-shrink-0">
                <rect x="1" y="3" width="14" height="10" rx="1.5" />
                <path d="M1 5L8 9.5L15 5" />
              </svg>
              hello@vadurtech.com.my
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© 2025 VadurTech Sdn Bhd. All rights reserved.</div>
          <div className="flex gap-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}