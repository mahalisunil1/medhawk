"use client";

import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function NewProductDevelopment() {
  const container = useRef<HTMLDivElement>(null);
  const imagesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let imgs = gsap.utils.toArray('.npd-stacked-img') as HTMLElement[];
    
    // Positions for 4 images stacked towards top-left
    const positions = [
      { x: 0, y: 0, scale: 1, zIndex: 40, opacity: 1 },
      { x: -35, y: -35, scale: 0.9, zIndex: 30, opacity: 0.85 },
      { x: -70, y: -70, scale: 0.8, zIndex: 20, opacity: 0.65 },
      { x: -105, y: -105, scale: 0.7, zIndex: 10, opacity: 0.45 }
    ];

    // Initial setup
    imgs.forEach((img, i) => gsap.set(img, positions[i]));

    const interval = setInterval(() => {
      const front = imgs[0];
      const mid1 = imgs[1];
      const mid2 = imgs[2];
      const back = imgs[3];

      // 1. Animate front image away to bottom-right
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
          
          // 3. Set z-indexes and place the old front image at the back (hidden)
          gsap.set(mid1, { zIndex: 40 });
          gsap.set(mid2, { zIndex: 30 });
          gsap.set(back, { zIndex: 20 });
          gsap.set(front, { zIndex: 10, x: -140, y: -140, scale: 0.6, opacity: 0 });

          // 4. Animate everyone into their new positions
          gsap.to(mid1, { ...positions[0], duration: 0.8, ease: "power2.out" });
          gsap.to(mid2, { ...positions[1], duration: 0.8, ease: "power2.out" });
          gsap.to(back, { ...positions[2], duration: 0.8, ease: "power2.out" });
          gsap.to(front, { ...positions[3], duration: 0.8, ease: "power2.out" });
        }
      });
    }, 4000); // Triggers every 4 seconds

    return () => clearInterval(interval);
  }, { scope: imagesContainer });

  const listItems = [
    "Product Development Strategy",
    "Proof of Concept (PoC) & MVP Development",
    "Human-Centered Design",
    "Multidisciplinary Engineering Development",
    "Prototyping & Iterative Testing",
    "Product Validation & Manufacturing Preparation"
  ];

  // Using Unsplash placeholders since the image generator is currently unavailable (rate limited). 
  // These closely match the themes shown in the screenshot (Warehouse AGV, tech device, outdoor vehicle, server room).
  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-10 lg:px-20 overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* Left Content - Animated Stack of 4 Images */}
        <div className="flex-1 w-full flex justify-center lg:justify-start items-center h-[500px] lg:pl-32" ref={imagesContainer}>
          <div className="relative w-[85%] max-w-[360px] aspect-[3/4]">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="npd-stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/5"
              >
                <img src={src} alt={`New Product ${idx+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Text */}
        <div className="flex-1 lg:pl-12 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.1] mb-6 tracking-tight">
            New Product Development<br />Services
          </h2>
          <p className="text-[1.05rem] text-white/90 leading-relaxed mb-10 font-light">
            Full-cycle new product development across industries, from<br className="hidden lg:block"/> industrial equipment to consumer electronics.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-[1.05rem] font-light">
                <FiArrowRight className="text-xl shrink-0 mt-1 text-[#62BFED]" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-3.5 px-6 rounded-md flex items-center gap-2 transition-all text-[0.95rem] shadow-sm cursor-pointer">
            View Services <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
