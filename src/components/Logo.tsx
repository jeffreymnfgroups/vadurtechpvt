import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logo-v-grad" x1="6" y1="6" x2="16" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.9" />
            <stop offset="1" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* The main V shape - split into two strokes for dynamic feel */}
        <motion.path 
          d="M6 6L16 26" 
          stroke="url(#logo-v-grad)" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M16 26L26 6" 
          stroke="white" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          strokeOpacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        />
        
        {/* Subtle accent dot at the joint */}
        <motion.circle 
          cx="16" cy="26" r="1.5" 
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
      </svg>
    </motion.div>
  );
}
