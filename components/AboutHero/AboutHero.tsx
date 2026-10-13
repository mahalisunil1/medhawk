import React from 'react';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-between overflow-hidden pt-24 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Syncopate:wght@400;700&display=swap');
      `}</style>
      
      {/* Background with subtle Noise */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Film grain / noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>
      </div>

      {/* Center Image & Overlay Text */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center mt-6 z-10">
        
        {/* Rounded Video Thumbnail */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[420px] aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden opacity-90 border border-white/10 shadow-[0_0_80px_rgba(98,191,237,0.25)]">
          <Image 
            src="/about_hero_thumb.jpg" 
            alt="Medical Device Video Thumbnail" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Text Overlay: we are medhawk */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 
            style={{ fontFamily: "'Playfair Display', serif" }} 
            className="text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] text-white leading-none whitespace-nowrap drop-shadow-lg flex items-center justify-center lowercase tracking-tight"
          >
            we are medhawk
          </h1>
          
          <button className="mt-8 flex items-center gap-3 bg-transparent text-white font-bold text-sm md:text-base pointer-events-auto hover:text-[#62BFED] transition-colors drop-shadow-md cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#62BFED] bg-black/40 flex items-center justify-center transition-transform hover:scale-110">
              <FiPlay className="text-lg md:text-xl ml-1 text-[#62BFED]" fill="#62BFED" />
            </div>
            Play Video
          </button>
        </div>
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 pb-24 pt-16 mt-auto">
        
        <div className="inline-block bg-[#C2BBF0] text-[#0b111e] px-5 py-2 rounded-[1.5rem] text-[11px] font-bold tracking-wider uppercase mb-10 shadow-sm">
          ABOUT US
        </div>
        
        <h2 className="text-[2.2rem] sm:text-4xl md:text-[3.25rem] lg:text-[3.5rem] font-light leading-[1.15] mb-8 max-w-5xl tracking-tight text-white">
          Together, We Design Innovations that Shape our Future
        </h2>
        
        <div className="flex flex-col gap-6 text-[1.05rem] md:text-[1.2rem] text-gray-300 max-w-[70rem] font-light leading-relaxed">
          <p>
            We are a product development firm specialized in the medical, digital health, and high-tech industries, combining design, engineering, software, quality assurance, and regulatory expertise.
          </p>
          <p>
            Since 2005, MedHawk has helped 300+ North American companies bring innovative products to market faster.
          </p>
        </div>

      </div>

    </section>
  );
}
