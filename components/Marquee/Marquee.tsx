"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Marquee() {
  const marqueeContainer = useRef<HTMLDivElement>(null);
  const marqueeContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (marqueeContent.current) {
      // Get the width of one set of logos (half of the total flex container)
      const totalWidth = marqueeContent.current.scrollWidth;
      const singleSetWidth = totalWidth / 2;

      // Animate the marquee smoothly and infinitely
      gsap.to(marqueeContent.current, {
        x: -singleSetWidth,
        ease: "none",
        duration: 30, // Very slow and smooth as requested
        repeat: -1,
      });
    }
  }, { scope: marqueeContainer });

  const logos = (
    <>
      <div className="flex items-center justify-center min-w-[200px]">
        <span className="text-3xl font-semibold text-[#888888] tracking-tight lowercase opacity-80">
          smardii
        </span>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <span className="text-4xl font-serif font-medium text-[#888888] opacity-80">
          J&J
        </span>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <div className="flex flex-col items-center text-[#888888] opacity-80">
          <svg width="45" height="40" viewBox="0 0 100 100" fill="currentColor" className="mb-2">
            <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="12" />
            <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="12" />
            <path d="M50 50 L90 90" stroke="currentColor" strokeWidth="12" />
          </svg>
          <span className="text-sm font-bold tracking-[0.2em]">KONGSBERG</span>
          <span className="text-[0.55rem] tracking-[0.4em] mt-0.5">AUTOMOTIVE</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <span className="text-3xl font-black text-[#888888] tracking-widest opacity-80 uppercase">
          KINOVA
        </span>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <span className="text-4xl font-bold text-[#888888] italic opacity-80">
          CN
        </span>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <span className="text-2xl font-serif text-[#888888] opacity-80">
          HENRY SCHEIN<sup className="text-xs">®</sup>
        </span>
      </div>

      <div className="flex items-center justify-center min-w-[200px]">
        <div className="flex flex-col items-center text-[#888888] opacity-80">
          <svg width="40" height="25" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <path d="M10 25 L90 25 M50 5 L50 45 M30 10 L70 40 M30 40 L70 10" />
            <circle cx="50" cy="25" r="15" fill="currentColor" />
          </svg>
          <span className="text-xl font-serif tracking-[0.15em]">REGENESIS<sup className="text-[0.6rem]">®</sup></span>
          <span className="text-[0.65rem] italic mt-1">Energy for an Active Life</span>
        </div>
      </div>
    </>
  );

  return (
    <section className="bg-[var(--dark-color)] py-8 overflow-hidden" ref={marqueeContainer}>
      <div 
        ref={marqueeContent} 
        className="flex items-center w-max"
      >
        {/* Render two identical sets of logos side-by-side for seamless looping */}
        <div className="flex items-center justify-around gap-16 px-8">
          {logos}
        </div>
        <div className="flex items-center justify-around gap-16 px-8">
          {logos}
        </div>
      </div>
    </section>
  );
}
