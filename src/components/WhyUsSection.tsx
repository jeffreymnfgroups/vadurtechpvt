import { Rocket, ShieldCheck, HeartHandshake, Zap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const reasons = [
  { icon: Rocket, title: "Fast-Track Execution", description: "Launch your business online in 7-14 days. We prioritize speed without compromising on pixel-perfect quality." },
  { icon: ShieldCheck, title: "Malaysian Market Ready", description: "Integrated with local payment gateways like FPX and DuitNow. SEO optimized for the local market." },
  { icon: HeartHandshake, title: "Direct Support", description: "No complex ticketing systems. Text us directly on WhatsApp for any changes or support you need." },
  { icon: Zap, title: "Premium Aesthetics", description: "State-of-the-art glassmorphic designs that position your brand as a leader in your industry." }
];

export default function WhyUsSection() {
  const sectionRef = useReveal(0.1);
  return (
    <section id="why-us" className="py-28 px-6 max-w-7xl mx-auto">
      <div ref={sectionRef} className="reveal">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">THE VADURTECH DIFFERENCE</p>
          <h2 className="text-4xl md:text-6xl text-white font-serif font-normal italic">Why businesses choose us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-white/8">
                <reason.icon className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors" />
              </div>
              <h3 className="text-xl text-white mb-3 font-serif">{reason.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{reason.description}</p>
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>
        <div className="mt-16 liquid-glass rounded-3xl p-8 md:p-12 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-2xl text-white font-serif mb-2">Still not convinced?</h4>
            <p className="text-white/45">We've helped over 50 local businesses transition to the digital era with high-converting websites.</p>
          </div>
          <a href="https://wa.me/601151121248" target="_blank" rel="noopener noreferrer" className="bg-white text-[#001428] px-10 py-4 rounded-full font-medium hover:scale-105 hover:shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all whitespace-nowrap">
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
