export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 min-h-[inherit] justify-center">
        <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-6xl font-normal font-serif text-white">
          We build <em className="not-italic" style={{ color: 'hsl(240,4%,66%)' }}>websites & online stores</em> for Malaysian businesses.
        </h1>
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          VadurTech specialises in custom website design and e-commerce development for SMEs across Malaysia. Clean code. Fast delivery. Priced in Ringgit.
        </p>
        <div className="animate-fade-rise-delay-2 flex gap-4 mt-12 flex-wrap justify-center">
          <a href="#pricing" className="liquid-glass rounded-full px-12 py-5 text-base text-white hover:scale-[1.03] transition-transform cursor-pointer block">
            See Our Packages
          </a>
        </div>
      </div>
    </section>
  );
}