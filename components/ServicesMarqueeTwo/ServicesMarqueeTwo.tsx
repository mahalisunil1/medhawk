"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function ServicesMarqueeTwo() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const items = [
    "Safety & Security",
    "Cleantech & Environmental",
    "Lifescience",
    "Industrial & Commercial",
  ];

  useGSAP(() => {
    // Animate the track infinitely to the left.
    // Since the track contains two identical halves, moving it by -50% 
    // exactly covers one half, creating a flawless, zero-glitch infinite loop.
    gsap.to(track.current, {
      xPercent: -50,
      ease: "none",
      duration: 35, // Slow, subtle and smooth speed
      repeat: -1
    });
  }, { scope: container });

  return (
    <section className="bg-transparent py-12 md:py-20 overflow-hidden" ref={container}>
      <div ref={track} className="flex whitespace-nowrap w-max">
        {/* First Half */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <span 
              key={`first-${idx}`} 
              className="text-3xl md:text-4xl lg:text-[2.85rem] text-[#62BFED]/40 hover:text-[#62BFED] transition-colors font-normal px-8 md:px-14 lg:px-20 tracking-wide cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Second Half (Duplicate for seamless loop) */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <span 
              key={`second-${idx}`} 
              className="text-3xl md:text-4xl lg:text-[2.85rem] text-[#62BFED]/40 hover:text-[#62BFED] transition-colors font-normal px-8 md:px-14 lg:px-20 tracking-wide cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
