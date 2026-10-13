"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTA() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.cta-anim', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: container });

  return (
    <section className="bg-[var(--dark-color)] px-[5%] pb-24" ref={container}>
      <div className="cta-anim bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 shadow-2xl">
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-5 max-w-[800px]">
          <h2 className="text-[2.2rem] md:text-[2.6rem] lg:text-[2.9rem] font-normal leading-[1.15] text-[#1a1a1a] tracking-tight">
            Get a free consultation with our industry-leading experts
          </h2>
          <p className="text-[1rem] md:text-[1.1rem] text-[#333333] leading-relaxed max-w-[95%]">
            Facing roadblocks? Need external support? Our experts will answer your questions,
            help you navigate challenges, and guide you through every stage of your product
            development journey.
          </p>
          <p className="text-[0.8rem] text-gray-500 mt-2">
            *Some conditions may apply.
          </p>
        </div>

        {/* Right Side Visuals & Button */}
        <div className="flex flex-col items-center gap-8 lg:mr-8">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            <img 
              className="w-[4.5rem] h-[4.5rem] rounded-full border-[3px] border-[#FAF8FD] object-cover shadow-sm" 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" 
              alt="Expert" 
            />
            <img 
              className="w-[4.5rem] h-[4.5rem] rounded-full border-[3px] border-[#FAF8FD] object-cover shadow-sm" 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
              alt="Expert" 
            />
            <img 
              className="w-[4.5rem] h-[4.5rem] rounded-full border-[3px] border-[#FAF8FD] object-cover shadow-sm" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
              alt="Expert" 
            />
            <img 
              className="w-[4.5rem] h-[4.5rem] rounded-full border-[3px] border-[#FAF8FD] object-cover shadow-sm" 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" 
              alt="Expert" 
            />
          </div>
          
          {/* Button with Translucent Ring (Themed) */}
          <div className="p-1.5 rounded-[14px] bg-[#62BFED]/30 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3.5 px-7 rounded-[10px] whitespace-nowrap shadow-md transition-all">
              Schedule a consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
