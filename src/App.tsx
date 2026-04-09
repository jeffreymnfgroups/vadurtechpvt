import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhyUsSection from "@/components/WhyUsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen" style={{ background: 'hsl(201, 100%, 13%)' }}>
          <Navbar />
          <HeroSection />
          <TrustBar />
          <ServicesSection />
          <PricingSection />
          <WhyUsSection />
          <ProcessSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
          <WhatsAppButton />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
