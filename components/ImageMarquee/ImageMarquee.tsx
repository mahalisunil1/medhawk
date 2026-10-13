"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function ImageMarquee() {
  const marqueeContainer = useRef<HTMLDivElement>(null);
  const marqueeContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (marqueeContent.current) {
      // Use xPercent for perfectly responsive infinite loops that never break on resize
      gsap.fromTo(marqueeContent.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 80, 
          repeat: -1,
        }
      );
    }
  }, { scope: marqueeContainer });

  // Double the images in a single set so it is wide enough for 4K screens natively
  const baseImages = [
    "/images/med1.jpg",
    "/images/med2.jpg",
    "/images/med3.jpg",
    "/images/med4.jpg"
  ];
  
  const images = [...baseImages, ...baseImages];

  const ImageSet = () => (
    <div className="flex gap-6 px-3">
      {images.map((src, idx) => (
        <div 
          key={idx} 
          className="shrink-0 w-[300px] h-[320px] md:w-[350px] md:h-[320px] lg:w-[416px] lg:h-[350px] rounded-2xl overflow-hidden"
        >
          <img 
            src={src} 
            alt={`Showcase ${idx + 1}`} 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"; }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-[var(--dark-color)] py-16 overflow-hidden" ref={marqueeContainer}>
      <div 
        ref={marqueeContent} 
        className="flex w-max"
      >
        {/* Render exactly 2 identical massive sets for perfect 50% loop math */}
        <ImageSet />
        <ImageSet />
      </div>
    </section>
  );
}
