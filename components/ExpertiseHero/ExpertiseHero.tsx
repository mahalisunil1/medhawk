import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function ExpertiseHero() {
  return (
    <section className="bg-transparent text-white pt-24 pb-16 px-6 md:px-10 lg:px-20 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          {/* Left Text Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-8">
              End-to-end Product<br className="hidden md:block" /> Development Expertise
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
              With a seamless approach to product design and engineering, MedHawk blends
              innovation strategy, human factors, design, engineering, and quality assurance to
              create impactful and high-performing solutions.
            </p>
          </div>
          
          {/* Right CTA Button */}
          <div className="shrink-0">
            <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all text-[0.95rem] shadow-md cursor-pointer">
              Get in Touch <span className="ml-1 leading-none text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Large Image Section */}
        <div className="w-full relative aspect-[16/10] md:aspect-[16/7] rounded-[2rem] overflow-hidden">
          <Image 
            src="/expertise-hero.jpg" 
            alt="Engineers working in an electronics lab" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
