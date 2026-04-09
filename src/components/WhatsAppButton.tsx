import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500" />
      
      <a 
        href="https://wa.me/601151121248" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block"
      >
        <motion.div
           animate={{
            borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-emerald-500 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(16,185,129,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-400/50"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.div>

        {/* Liquid ripples */}
        <div className="absolute -inset-2 border-2 border-emerald-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  );
}
