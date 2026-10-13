"use client";

import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function QualityRiskManagement() {
  const container = useRef<HTMLDivElement>(null);
  const imagesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let imgs = gsap.utils.toArray('.qrm-stacked-img') as HTMLElement[];
    
    // Positions for 3 images stacked towards top-left
    const positions = [
      { x: 0, y: 0, scale: 1, zIndex: 30, opacity: 1 },
      { x: -35, y: -35, scale: 0.9, zIndex: 20, opacity: 0.9 },
      { x: -70, y: -70, scale: 0.8, zIndex: 10, opacity: 0.7 }
    ];

    imgs.forEach((img, i) => gsap.set(img, positions[i]));

    const interval = setInterval(() => {
      const front = imgs[0];
      const mid = imgs[1];
      const back = imgs[2];

      // Animate front image away (bottom-right)
      gsap.to(front, {
        x: 100, 
        y: 100,
        opacity: 0, 
        scale: 0.85, 
        duration: 0.6, 
        ease: "power2.in",
        onComplete: () => {
          imgs = [mid, back, front];
          
          gsap.set(mid, { zIndex: 30 });
          gsap.set(back, { zIndex: 20 });
          
          // Place old front image behind everyone, hidden
          gsap.set(front, { zIndex: 10, x: -120, y: -120, scale: 0.7, opacity: 0 });

          // Animate to new positions smoothly
          gsap.to(mid, { ...positions[0], duration: 0.8, ease: "power2.out" });
          gsap.to(back, { ...positions[1], duration: 0.8, ease: "power2.out" });
          gsap.to(front, { ...positions[2], duration: 0.8, ease: "power2.out" });
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, { scope: imagesContainer });

  const listItems = [
    "Planning and Defining Requirements",
    "Documentation Management",
    "Risk Management",
    "Design Verification",
    "Regulatory Strategy Support",
    "Timeline Estimation"
  ];

  const images = [
    "/qrm_img1.jpg",
    "/qrm_img2.jpg",
    "/qrm_img3.jpg"
  ];

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-10 lg:px-20 overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* Left Content - Animated Stack */}
        <div className="flex-1 w-full flex justify-center lg:justify-start items-center h-[500px] lg:pl-32" ref={imagesContainer}>
          <div className="relative w-[85%] max-w-[360px] aspect-[3/4]">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="qrm-stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
              >
                <img src={src} alt={`Quality Management ${idx+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 lg:pl-12 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.1] mb-6 tracking-tight">
            Quality, Risk & Regulatory<br />Management
          </h2>
          <p className="text-[1.05rem] text-white/90 leading-relaxed mb-10 font-light">
            Structured quality, risk, and regulatory processes built into<br className="hidden lg:block"/> development from day one.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-[1.05rem] font-light">
                <FiArrowRight className="text-xl shrink-0 mt-1 text-[#8FB8ED]" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-[#8FB8ED] text-[#0b111e] font-semibold py-3.5 px-6 rounded-md flex items-center gap-2 hover:bg-[#62BFED] transition-all shadow-md hover:shadow-lg text-[0.95rem]">
            View Services <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
