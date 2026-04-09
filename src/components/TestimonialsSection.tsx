const testimonials = [
  {
    quote: "VadurTech built our restaurant website in 10 days. We now get reservations and WhatsApp orders every day. Worth every ringgit.",
    initials: "ER",
    name: "Encik Rashid",
    business: "Restoran Selera Ampang, Selangor"
  },
  {
    quote: "Our clinic website looks so professional. Patients now find us on Google. The team was patient, responsive, and bilingual.",
    initials: "PS",
    name: "Puan Suraya",
    business: "Klinik Bersatu, Kuala Lumpur"
  },
  {
    quote: "Our online store was set up faster than I expected. The FPX payment works perfectly and we've been getting orders weekly.",
    initials: "AC",
    name: "Ah Chong",
    business: "Mega Hardware, Ipoh"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal">What our clients say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((t, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-8">
            <svg width="32" height="24" viewBox="0 0 32 24">
              <path d="M0 24 Q0 12 8 12 Q4 12 4 6 Q4 0 10 0 Q16 0 16 8 Q16 20 4 24z M16 24 Q16 12 24 12 Q20 12 20 6 Q20 0 26 0 Q32 0 32 8 Q32 20 20 24z" fill="rgba(255,255,255,0.1)"/>
            </svg>
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, idx) => (
                <svg key={idx} width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 1l1.5 3 3.3.5-2.4 2.3.6 3.2L7 8.5l-3 1.5.6-3.2L2.2 4.5 5.5 4z" fill="rgba(255,255,255,0.7)"/>
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed italic mt-4 text-white/80">"{t.quote}"</p>
            <div className="border-t border-white/10 mt-6 pt-6" />
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="17" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <text x="18" y="23" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.7)" fontFamily="Inter">{t.initials}</text>
              </svg>
              <div>
                <p className="text-sm text-white">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}