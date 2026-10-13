"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";

const expertiseList = [
  "Mechanical Engineering",
  "Electronic Engineering",
  "Software Development",
  "Firmware Development",
  "Quality Assurance",
  "Regulatory Compliance",
];

// Duplicate to make a smooth 12-item wheel
const wheelItems = [...expertiseList, ...expertiseList];

export default function AboutExpertise() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!wheelRef.current) return;

    // Wheel Geometry
    const radius = 180; // Reduced radius for a tighter, subtle gap between text items
    const angle = 360 / wheelItems.length; // 30 degrees per item

    // Setup 3D cylindrical positions
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.set(item, {
        rotationX: i * -angle,
        z: radius,
        transformOrigin: `50% 50% -${radius}px`,
      });
    });

    // Stepped lock-wheel animation
    const tl = gsap.timeline({ repeat: -1 });

    const totalItems = wheelItems.length;
    for (let i = 1; i <= totalItems; i++) {
      tl.to(wheelRef.current, {
        rotationX: i * angle,
        duration: 0.6,
        ease: "power2.inOut",
        onUpdate: () => {
          const currentRot = gsap.getProperty(wheelRef.current, "rotationX") as number;

          let minDist = 999;
          let activeIndex = 0;

          // Find exact center item
          itemsRef.current.forEach((item, idx) => {
            if (!item) return;
            let itemWorldRot = (currentRot - idx * angle) % 360;
            if (itemWorldRot < 0) itemWorldRot += 360;
            if (itemWorldRot > 180) itemWorldRot -= 360;
            const dist = Math.abs(itemWorldRot);
            if (dist < minDist) {
              minDist = dist;
              activeIndex = idx;
            }
          });

          // Apply visual state based on distance from center
          itemsRef.current.forEach((item, idx) => {
            if (!item) return;
            let itemWorldRot = (currentRot - idx * angle) % 360;
            if (itemWorldRot < 0) itemWorldRot += 360;
            if (itemWorldRot > 180) itemWorldRot -= 360;
            const dist = Math.abs(itemWorldRot);

            if (idx === activeIndex) {
              gsap.to(item, { color: "#62BFED", opacity: 1, duration: 0.2, overwrite: "auto" });
            } else if (dist < angle * 2.5) {
              gsap.to(item, { color: "#223555", opacity: 0.35, duration: 0.2, overwrite: "auto" });
            } else {
              gsap.to(item, { opacity: 0, duration: 0.2, overwrite: "auto" });
            }
          });
        }
      }).to({}, { duration: 1.8 }); // Pause to let the user read it
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0b111e] text-white py-32 px-6 md:px-16 lg:px-24 overflow-hidden z-30 -mt-16 rounded-t-[3rem] border-t border-white/5">
      
      {/* Heavy Film Grain Overlay for exact screenshot match */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-8 items-center max-w-[80rem] mx-auto w-full">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="bg-[#62BFED] text-[#0b111e] self-start px-5 py-2 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
            EXPERTISE
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.1] tracking-tight text-white mb-2">
            Where Proven Expertise Meets Ambitious Innovation
          </h2>
          
          <div className="flex flex-col gap-6 text-gray-300 text-[15px] leading-[1.7] font-medium">
            <p>
              We combine strategy, design, and engineering in an<br/>
              integrated, ISO 13485-certified approach, bringing the<br/>
              expertise you need to <span className="text-white border-b border-[#3590F3] pb-0.5">develop medical devices</span> and<br/>
              high-tech products that meet the highest standards.
            </p>
            <p>
              Our multidisciplinary team guides you through every<br/>
              stage of development, from early concept to market<br/>
              launch, following structured, compliant processes that<br/>
              reduce risk and keep projects on track.
            </p>
          </div>

          <button className="mt-4 bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] self-start px-8 py-3.5 rounded-md text-[13px] font-bold flex items-center gap-3 transition-all shadow-md cursor-pointer">
            Explore our Expertise <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Right 3D Lock Wheel Animation */}
        <div className="relative w-full h-[550px] flex items-center justify-center [perspective:1200px]">
          <div 
            ref={wheelRef} 
            className="relative w-full h-[60px] [transform-style:preserve-3d] flex items-center justify-center"
          >
            {wheelItems.map((text, i) => (
              <div
                key={i}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="absolute w-full text-center text-[1.8rem] md:text-[2.5rem] font-light tracking-wide [backface-visibility:hidden]"
                style={{ color: "#3A3A3A" }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
