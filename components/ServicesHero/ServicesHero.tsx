import React from 'react';

export default function ServicesHero() {
  return (
    <section className="bg-transparent text-white pt-[140px] pb-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-8">
          Product Development Services
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="bg-[#C2BBF0] text-[#0b111e] px-5 py-2 rounded-full text-[0.85rem] font-semibold tracking-wide shadow-sm">
            Award-Winning Firm
          </span>
          <span className="bg-[#F1E3F3] text-[#0b111e] px-5 py-2 rounded-full text-[0.85rem] font-semibold tracking-wide shadow-sm">
            Trusted by Leading Enterprises
          </span>
          <span className="bg-[#8FB8ED] text-[#0b111e] px-5 py-2 rounded-full text-[0.85rem] font-semibold tracking-wide shadow-sm">
            ISO 13485 Certified
          </span>
        </div>
        
        <p className="text-[1.1rem] md:text-[1.2rem] text-white/90 leading-relaxed max-w-4xl font-light">
          MedHawk provides end-to-end product development services to help organizations transform ideas into successful products. 
          From medical device development and new product development to quality, regulatory, and manufacturing support, our 
          multidisciplinary team helps reduce risk, accelerate timelines, and bring innovative products to market with confidence.
        </p>
      </div>
    </section>
  );
}
