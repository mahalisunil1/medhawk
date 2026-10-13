"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function MedicalDeviceServices() {
  const container = useRef<HTMLDivElement>(null);
  const imagesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We have 3 images with class .stacked-img
    let imgs = gsap.utils.toArray('.stacked-img') as HTMLElement[];
    
    // Define the 3 positions for front, middle, back
    const positions = [
      { x: 0, y: 0, scale: 1, zIndex: 30, opacity: 1 },
      { x: 40, y: -40, scale: 0.9, zIndex: 20, opacity: 0.9 },
      { x: 80, y: -80, scale: 0.8, zIndex: 10, opacity: 0.7 }
    ];

    // Initial setup
    imgs.forEach((img, i) => gsap.set(img, positions[i]));

    const interval = setInterval(() => {
      const frontImg = imgs[0];
      const midImg = imgs[1];
      const backImg = imgs[2];

      // 1. Animate front image moving away to the right and fading
      gsap.to(frontImg, {
        x: 150, 
        opacity: 0, 
        scale: 0.85, 
        duration: 0.6, 
        ease: "power2.in",
        onComplete: () => {
          // 2. Update array order
          imgs = [midImg, backImg, frontImg];
          
          // 3. Instantly set z-indexes to reflect new order
          gsap.set(midImg, { zIndex: 30 });
          gsap.set(backImg, { zIndex: 20 });
          // Move the front image (now back image) to a starting hidden position
          gsap.set(frontImg, { zIndex: 10, x: 120, y: -120, scale: 0.7, opacity: 0 });

          // 4. Animate everyone into their new positions
          gsap.to(midImg, { ...positions[0], duration: 0.8, ease: "power2.out" });
          gsap.to(backImg, { ...positions[1], duration: 0.8, ease: "power2.out" });
          gsap.to(frontImg, { ...positions[2], duration: 0.8, ease: "power2.out" });
        }
      });
    }, 4000); // Trigger every 4 seconds

    return () => clearInterval(interval);
  }, { scope: imagesContainer });

  const listItems = [
    "User Needs, Requirements & Risk Definition",
    "Human-Centered Medical Device Design",
    "Multidisciplinary Medical Device Engineering",
    "Prototyping & Iterative Testing",
    "Regulatory Compliance & Documentation Support",
    "Verification, Validation & Design Transfer"
  ];

  return (
    <section className="bg-transparent text-white py-16 px-6 md:px-10 lg:px-20 overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 lg:pr-12 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.1] mb-6 tracking-tight">
            End-to-End Medical<br />Device Development<br />Services
          </h2>
          <p className="text-[1.05rem] text-white/90 leading-relaxed mb-8 font-light">
            Integrated medical device development from concept to<br className="hidden lg:block"/> regulatory submission, under one ISO 13485-certified team.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-[1.05rem] font-light">
                <FiArrowRight className="text-xl shrink-0 mt-1 text-[#3590F3]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3.5 px-6 rounded-md flex items-center gap-2 transition-all text-[0.95rem] shadow-md cursor-pointer">
            View Services <FiArrowRight />
          </button>
        </div>

        {/* Right Content - Animated Stack */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center h-[500px]" ref={imagesContainer}>
          <div className="relative w-[85%] max-w-[380px] aspect-[3/4]">
            {/* The 3 images */}
            <div className="stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10">
              <Image src="/services_img1.jpg" alt="Medical Device Cart" fill className="object-cover" />
            </div>
            <div className="stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10">
              <Image src="/services_img2.jpg" alt="MRI Scanner" fill className="object-cover" />
            </div>
            <div className="stacked-img absolute top-0 left-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10">
              <Image src="/services_img3.jpg" alt="Health App UI" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
