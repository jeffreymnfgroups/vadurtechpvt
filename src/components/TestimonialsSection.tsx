import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  { quote: "VadurTech built our restaurant website in 10 days. We now get reservations and WhatsApp orders every day. Worth every ringgit.", initials: "ER", name: "Encik Rashid", business: "Restoran Selera Ampang, Selangor" },
  { quote: "Our clinic website looks so professional. Patients now find us on Google. The team was patient, responsive, and bilingual.", initials: "PS", name: "Puan Suraya", business: "Klinik Bersatu, Kuala Lumpur" },
  { quote: "Our online store was set up faster than I expected. The FPX payment works perfectly and we've been getting orders weekly.", initials: "AC", name: "Ah Chong", business: "Mega Hardware, Ipoh" }
];

export default function TestimonialsSection() {
  const sectionRef = useReveal(0.1);
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={sectionRef} className="reveal">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">CLIENT STORIES</p>
          <h2 className="text-4xl md:text-6xl text-white text-center font-serif font-normal">What our clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 group hover:border-white/20 transition-all duration-300 border border-white/10">
              <svg width="32" height="24" viewBox="0 0 32 24">
                <path d="M0 24 Q0 12 8 12 Q4 12 4 6 Q4 0 10 0 Q16 0 16 8 Q16 20 4 24z M16 24 Q16 12 24 12 Q20 12 20 6 Q20 0 26 0 Q32 0 32 8 Q32 20 20 24z" fill="rgba(255,255,255,0.08)"/>
              </svg>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 1l1.5 3 3.3.5-2.4 2.3.6 3.2L7 8.5l-3 1.5.6-3.2L2.2 4.5 5.5 4z" fill="rgba(255,255,255,0.6)"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed italic mt-4 text-white/70">"{t.quote}"</p>
              <div className="border-t border-white/8 mt-6 pt-6" />
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="19" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                  <text x="20" y="25" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.6)" fontFamily="Inter">{t.initials}</text>
                </svg>
                <div>
                  <p className="text-sm text-white font-medium">{t.name}</p>
                  <p className="text-xs text-white/40">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}