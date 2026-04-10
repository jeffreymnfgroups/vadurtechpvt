import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="bg-white/90 backdrop-blur-md text-emerald-950 px-4 py-2 rounded-2xl text-sm font-semibold shadow-2xl border border-white/20 whitespace-nowrap hidden md:block"
          >
            Need help? WhatsApp us!
          </motion.div>
        )}
      </AnimatePresence>

      <a 
        href="https://wa.me/601151121248" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group"
      >
                
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 border border-white/10"
        >
          <img 
            src="/whatsappsvg.svg" 
            alt="WhatsApp" 
            className="w-10 h-10 object-contain brightness-0 invert" 
          />
        </motion.div>

        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-[#25D366]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </a>
    </div>
  );
}
