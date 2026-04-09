import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you only build websites and online stores?",
    a: "Yes. VadurTech specialises exclusively in website design and e-commerce development. We don't offer IT support, hosting resale, or digital marketing services — just great websites and stores."
  },
  {
    q: "Can I update the website myself after it's built?",
    a: "Yes, all Professional and E-Commerce packages include a CMS (Content Management System). You can update text, images, products, and blog posts without any coding knowledge."
  },
  {
    q: "Do I own the website after it's delivered?",
    a: "Absolutely. Upon final payment, we hand over all files, source code, login credentials, and full ownership. The website is 100% yours."
  },
  {
    q: "How long does it take to build a website?",
    a: "Starter Website: 7–14 working days. Professional Website: 14–21 days. E-Commerce Starter: 14–21 days. E-Commerce Pro: 21–30 days. Timeline depends on how quickly you provide content."
  },
  {
    q: "Do you serve businesses outside Kuala Lumpur?",
    a: "Yes! We work with clients across all Malaysian states — Selangor, Penang, Johor, Melaka, Sabah, Sarawak, and more. Everything is managed remotely via Zoom and WhatsApp."
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer (Maybank, CIMB, RHB, Public Bank), DuitNow QR, and online payment via Billplz. A 50% deposit is required to begin, with the balance on delivery."
  },
  {
    q: "Do I need to buy hosting separately?",
    a: "No. All packages include 1 year of domain registration and hosting. After the first year, standard renewal rates apply (typically RM 100–300/year depending on your plan)."
  }
];

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-4xl md:text-5xl text-white text-center font-serif font-normal mb-16">Common questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="liquid-glass rounded-2xl mb-3 border border-white/10 px-2 data-[state=open]:bg-white/5 transition-colors">
            <AccordionTrigger className="px-4 py-4 text-white text-sm font-normal hover:no-underline">
              <span className="text-left">{faq.q}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}