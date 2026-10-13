"use client";

import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function ManufacturingSupport() {
  const container = useRef<HTMLDivElement>(null);
  const imagesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let imgs = gsap.utils.toArray('.ms-stacked-img') as HTMLElement[];
    
    // Positions for 4 images stacked towards top-right
    const positions = [
      { x: 0, y: 0, scale: 1, zIndex: 40, opacity: 1 },
      { x: 35, y: -35, scale: 0.9, zIndex: 30, opacity: 0.9 },
      { x: 70, y: -70, scale: 0.8, zIndex: 20, opacity: 0.7 },
      { x: 105, y: -105, scale: 0.7, zIndex: 10, opacity: 0.5 }
    ];

    // Initial setup
    imgs.forEach((img, i) => gsap.set(img, positions[i]));

    const interval = setInterval(() => {
      const front = imgs[0];
      const mid1 = imgs[1];
      const mid2 = imgs[2];
      const back = imgs[3];

      // 1. Animate front image away to the bottom-right
      gsap.to(front, {
        x: 100, 
        y: 100,
        opacity: 0, 
        scale: 0.85, 
        duration: 0.6, 
        ease: "power2.in",
        onComplete: () => {
          // 2. Update array order
          imgs = [mid1, mid2, back, front];
          
          // 3. Set new z-indexes instantly
          gsap.set(mid1, { zIndex: 40 });
          gsap.set(mid2, { zIndex: 30 });
          gsap.set(back, { zIndex: 20 });
          
          // Move the old front image to a hidden starting position at the back
          gsap.set(front, { zIndex: 10, x: 140, y: -140, scale: 0.6, opacity: 0 });

          // 4. Animate everyone into their new final positions smoothly
          gsap.to(mid1, { ...positions[0], duration: 0.8, ease: "power2.out" });
          gsap.to(mid2, { ...positions[1], duration: 0.8, ease: "power2.out" });
          gsap.to(back, { ...positions[2], duration: 0.8, ease: "power2.out" });
          gsap.to(front, { ...positions[3], duration: 0.8, ease: "power2.out" });
        }
      });
    }, 4000); // Trigger every 4 seconds

    return () => clearInterval(interval);
  }, { scope: imagesContainer });

  const listItems = [
    "Supplier Sourcing & Qualification",
    "Design for Manufacturing (DfM)",
    "Manufacturing Cost Estimation &\nCompetitive Bidding",
    "Production-Ready Technical Package",
    "Contract Manufacturing Transfer",
    "In-House Assembly & Production Testing"
  ];

  const images = [
    "/ms_img1.jpg",
    "/ms_img2.jpg",
    "/ms_img3.jpg",
    "/ms_img4.jpg"
  ];

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-10 lg:px-20 overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 lg:pr-12 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.1] mb-6 tracking-tight">
            Manufacturing Support
          </h2>
          <p className="text-[1.05rem] text-white/90 leading-relaxed mb-10 font-light">
            Bridging the gap between design and production with<br className="hidden lg:block"/> manufacturing-ready documentation and supplier<br className="hidden lg:block"/> coordination.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-[1.05rem] font-light">
                <FiArrowRight className="text-xl shrink-0 mt-1 text-[#3590F3]" />
                <span className="leading-snug whitespace-pre-line">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-[#3590F3] text-white font-semibold py-3.5 px-6 rounded-md flex items-center gap-2 hover:bg-[#62BFED] hover:text-[#0b111e] transition-all shadow-md hover:shadow-lg text-[0.95rem]">
            View Services <FiArrowRight />
          </button>
        </div>

        {/* Right Content - Animated Stack */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center h-[500px] lg:pr-16" ref={imagesContainer}>
          <div className="relative w-[85%] max-w-[360px] aspect-[3/4]">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="ms-stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
              >
                <img src={src} alt={`Manufacturing Process ${idx+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
