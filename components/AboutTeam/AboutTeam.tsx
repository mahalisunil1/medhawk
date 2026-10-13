"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";

const teamCol1 = [
  "/team_1.jpg", "/team_3.jpg",
  "/team_1.jpg", "/team_3.jpg",
  "/team_1.jpg", "/team_3.jpg",
  "/team_1.jpg", "/team_3.jpg",
];

const teamCol2 = [
  "/team_2.jpg", "/team_4.jpg",
  "/team_2.jpg", "/team_4.jpg",
  "/team_2.jpg", "/team_4.jpg",
  "/team_2.jpg", "/team_4.jpg",
];

export default function AboutTeam() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Column 1: Moves bottom to top (0% to -50%)
    const tl1 = gsap.to(col1Ref.current, {
      yPercent: -50,
      ease: "none",
      duration: 65, // Increased duration to drastically slow down the marquee
      repeat: -1,
    });

    // Column 2: Moves top to bottom (-50% to 0%)
    const tl2 = gsap.fromTo(
      col2Ref.current,
      { yPercent: -50 },
      { yPercent: 0, ease: "none", duration: 65, repeat: -1 }
    );

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <section className="relative w-full bg-[#FAF8FD] border-t border-[#C2BBF0]/30 z-40 -mt-16 rounded-t-[3rem] px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-stretch max-w-[75rem] mx-auto w-full min-h-[550px]">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-8 max-w-xl py-20">
          <div className="bg-[#62BFED] text-[#0b111e] self-start px-5 py-2 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
            OUR TEAM
          </div>
          
          <h2 className="text-4xl md:text-[3.2rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-tight text-[#1A1A1A] mb-2">
            Our Collective Talent<br/>
            That Makes it Happen
          </h2>
          
          <div className="flex flex-col gap-6 text-[#1A1A1A] text-[15px] leading-[1.7] font-medium pr-4 pt-2">
            <p>
              The people behind MedHawk are driven by a shared<br/>
              passion for innovation, collaboration, and meaningful<br/>
              impact. Our multidisciplinary team brings together<br/>
              strategic minds, creative visionaries, and seasoned<br/>
              engineers who unite their talents to deliver<br/>
              outstanding results.
            </p>
            <p>
              Each individual contributes a unique perspective, and<br/>
              together we are committed to building products and<br/>
              technologies that truly make a difference.
            </p>
          </div>

          <button className="mt-4 bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] self-start px-7 py-3.5 rounded-md text-[13px] font-bold flex items-center gap-3 transition-all shadow-md cursor-pointer">
            Meet the Team <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Right Marquee Container */}
        {/* Reaches the absolute edges of the section container */}
        <div className="relative w-full h-[500px] lg:h-auto overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-full grid grid-cols-2 gap-6">
            
            {/* Column 1 - Bottom to Top */}
            {/* Adding pb-6 perfectly balances gap-6 so that yPercent: -50 translates exactly to the start of the next loop */}
            <div ref={col1Ref} className="flex flex-col gap-6 pb-6 w-full h-max">
              {teamCol1.map((src, i) => (
                <div key={`col1-${i}`} className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shrink-0">
                  <Image src={src} alt={`Team Member ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Column 2 - Top to Bottom */}
            <div ref={col2Ref} className="flex flex-col gap-6 pb-6 w-full h-max">
              {teamCol2.map((src, i) => (
                <div key={`col2-${i}`} className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shrink-0">
                  <Image src={src} alt={`Team Member ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
