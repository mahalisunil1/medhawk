"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const avatars = [
  { url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80", style: { left: '35px', top: '86px' } }, // Top Left
  { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80", style: { left: '156px', top: '16px' } }, // Top
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", style: { left: '277px', top: '86px' } }, // Top Right
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", style: { left: '277px', top: '226px' } }, // Bottom Right
  { url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80", style: { left: '156px', top: '296px' } }, // Bottom
  { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80", style: { left: '35px', top: '226px' } }  // Bottom Left
];

export default function BottomCTA() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle float animation for the avatars
    gsap.to('.avatar-float', {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
        yoyo: true,
        repeat: -1
      }
    });

    // Reveal animation
    gsap.from('.cta-card-anim', {
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
    <section className="bg-[var(--dark-color)] px-[5%] pb-24 pt-8" ref={container}>
      <div className="cta-card-anim bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] lg:rounded-[3rem] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8 overflow-hidden relative shadow-2xl">
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-[650px] z-10 relative">
          <h2 className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] font-normal leading-[1.1] text-[#1a1a1a] tracking-tight">
            Our experts always got your back
          </h2>
          
          <p className="text-[1.1rem] md:text-[1.2rem] text-[#333333] leading-relaxed max-w-[520px] mb-4">
            With extensive cross-industry experience, we&apos;re always ready to tackle product development complexities and propel your success.
          </p>
          
          <div className="flex flex-wrap items-center gap-5">
            {/* Azure Primary Button with soft ring */}
            <div className="p-1.5 rounded-[12px] bg-[#62BFED]/30 transition-transform duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer">
              <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3.5 px-7 rounded-[8px] whitespace-nowrap text-[1rem] shadow-md transition-all">
                Schedule a consultation
              </button>
            </div>
            
            {/* Sky Blue Secondary Button */}
            <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-4 px-8 rounded-[12px] whitespace-nowrap shadow-sm flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 text-[1rem]">
              Contact our Team <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Right Side Visuals (Circular Avatars) */}
        <div className="hidden lg:flex w-[400px] h-[400px] relative items-center justify-center flex-shrink-0 z-10 mr-8">
          {avatars.map((avatar, index) => (
            <div 
              key={index}
              className="absolute avatar-float"
              style={avatar.style}
            >
              <img 
                className="w-[5.5rem] h-[5.5rem] rounded-full object-cover shadow-md border-[3px] border-[#FAF8FD]" 
                src={avatar.url} 
                alt={`Expert ${index + 1}`} 
                draggable="false"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
