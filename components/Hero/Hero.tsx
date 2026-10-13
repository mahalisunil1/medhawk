"use client";

import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { BsChatText } from 'react-icons/bs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-anim', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });

    tl.from('.hero-20', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    }, "-=0.6");
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-screen flex flex-col justify-start md:justify-center px-6 md:px-[5%] text-white overflow-hidden bg-black md:bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover bg-no-repeat -mt-[80px] pt-[110px] md:pt-[140px]"
    >
      <div 
        className="hidden md:block absolute inset-0 z-[1]" 
        style={{ background: 'linear-gradient(to right, rgba(11, 17, 30, 0.94) 0%, rgba(14, 22, 38, 0.75) 60%, rgba(98, 191, 237, 0.15) 100%)' }}
      ></div>

      <div className="relative z-[2] max-w-[650px]">
        <h1 className="hero-anim text-[2.65rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal leading-[1.08] mb-6 tracking-tight text-white">
          Together,<br />
          we design<br />
          innovations that<br />
          shape our future
        </h1>
        
        <p className="hero-anim text-[1.05rem] md:text-[1.15rem] leading-[1.58] mb-8 md:mb-10 text-white/90 max-w-[580px]">
          MedHawk is a leading product development firm in North America that merges Strategy, Human Factors, Design, and Engineering to bring innovative solutions to life.
        </p>

        <div className="hero-anim flex flex-col gap-4 items-start md:flex-row md:items-center">
          {/* Button 1: Explore Projects */}
          <button className="bg-[#3590F3] text-white px-8 md:px-6 py-4 rounded-[14px] md:rounded-md text-[0.95rem] md:text-base font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 hover:bg-[#62BFED] hover:text-[#0b111e] hover:-translate-y-[1px] w-fit shadow-md cursor-pointer">
            Explore Projects <FiArrowRight className="text-lg" />
          </button>
          
          {/* Button 2: Discover MedHawk */}
          <button className="bg-transparent text-white font-bold text-[1.05rem] md:text-base px-0 md:px-6 py-2.5 md:py-4 md:rounded-md flex items-center gap-2.5 transition-all duration-200 hover:text-[#62BFED] md:bg-white/10 md:border md:border-[#C2BBF0]/30 md:hover:bg-[#C2BBF0]/20 hover:translate-x-1 md:hover:translate-x-0 w-fit cursor-pointer">
            Discover MedHawk <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile "20 years" Graphic (Exact Desktop Style in Mobile Layout Flow) */}
      <div className="hero-20 lg:hidden flex flex-col items-center justify-center mt-12 pb-12 w-full z-[2]">
        <div className="text-[9.5rem] sm:text-[11rem] font-black leading-none text-white/95 tracking-[-5px] font-[family-name:var(--font-geist-sans)] drop-shadow-[2px_4px_20px_rgba(0,0,0,0.3)]">
          20
        </div>
        <div className="text-[2.2rem] sm:text-[2.5rem] font-light mt-[-1.2rem] opacity-90">
          years
        </div>
      </div>

      {/* Desktop "20 years" Graphic */}
      <div className="hero-20 hidden lg:flex absolute right-[15%] top-1/2 -translate-y-1/2 z-[2] flex-col items-center">
        <div className="text-[14rem] font-black leading-none text-white/95 tracking-[-5px] font-[family-name:var(--font-geist-sans)] drop-shadow-[2px_4px_20px_rgba(0,0,0,0.3)]">
          20
        </div>
        <div className="text-[2.5rem] font-light mt-[-1.5rem] opacity-90">
          years
        </div>
      </div>

      {/* Ask Anything (Desktop/Tablet) */}
      <button className="hero-anim hidden md:flex absolute bottom-8 right-8 z-10 bg-[#62BFED] text-[#0b111e] px-6 py-3 rounded-full text-[0.95rem] font-semibold items-center gap-2 shadow-[0_4px_15px_rgba(98,191,237,0.35)] transition-all duration-200 hover:bg-[#8FB8ED] hover:-translate-y-[2px]">
        <BsChatText /> Ask Anything
      </button>
    </section>
  );
}
