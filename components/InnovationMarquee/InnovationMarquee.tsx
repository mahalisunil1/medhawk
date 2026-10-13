"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const upperRowBase = [
  "Home Healthcare Device",
  "Medical Device",
  "Custom App/Software",
  "Wearable Tech",
  "Custom Hardware",
  "Product Prototype",
  "Patient Monitoring",
  "Diagnostic Equipment"
];
// Ensure the set is wide enough to cover the screen by doubling the base array
const upperRowTags = [...upperRowBase, ...upperRowBase];

const bottomRowBase = [
  "Robotic System",
  "Cloud-Connected System",
  "Companion App + Hardware Ecosystem",
  "AI-Enabled Product",
  "Connected Health Platform",
  "Digital Therapeutics",
  "Surgical Instruments"
];
// Ensure the set is wide enough to cover the screen by doubling the base array
const bottomRowTags = [...bottomRowBase, ...bottomRowBase];

export default function InnovationMarquee() {
  const container = useRef<HTMLDivElement>(null);
  const upperTrack = useRef<HTMLDivElement>(null);
  const bottomTrack = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Upper row: left to right.
    // Animates from -50% to 0%. When it hits 0%, it instantly loops back to -50% because repeat is -1.
    // Set 1 and Set 2 are identical, so the jump is completely invisible (seamless loop).
    if (upperTrack.current) {
      gsap.fromTo(
        upperTrack.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 90, // Substantially slowed down
          repeat: -1,
        }
      );
    }

    // Bottom row: right to left.
    // Animates from 0% to -50%.
    if (bottomTrack.current) {
      gsap.fromTo(
        bottomTrack.current,
        { xPercent: 0 },
        {
          xPercent: -50,
          ease: "none",
          duration: 85, // Substantially slowed down
          repeat: -1,
        }
      );
    }
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="py-24 overflow-hidden relative flex flex-col items-center justify-center border-t border-white/5"
      style={{
        background: 'radial-gradient(ellipse at center, #15223c 0%, #0c1424 60%, #070c16 100%)',
      }}
    >
      <h2 className="text-white text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-normal tracking-wide mb-14 text-center z-10 relative">
        What innovation do we build next?
      </h2>

      {/* Marquee Container with fade masks on left and right */}
      <div 
        className="w-full relative flex flex-col gap-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        {/* Upper Row (Left to Right) */}
        <div className="flex w-max" ref={upperTrack}>
          {/* Set 1 */}
          <div className="flex items-center gap-5 pr-5">
            {upperRowTags.map((tag, i) => {
              const pastelStyles = [
                "bg-[#C2BBF0] text-[#0b111e]",
                "bg-[#8FB8ED] text-[#0b111e]",
                "bg-[#62BFED] text-[#0b111e]",
                "bg-[#3590F3] text-white",
                "bg-[#F1E3F3] text-[#0b111e]",
              ];
              return (
                <div 
                  key={`u1-${i}`} 
                  className={`${pastelStyles[i % pastelStyles.length]} px-7 py-3 rounded-full text-[0.95rem] font-semibold whitespace-nowrap shadow-sm`}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          {/* Set 2 (Identical Clone for Seamless Loop) */}
          <div className="flex items-center gap-5 pr-5">
            {upperRowTags.map((tag, i) => {
              const pastelStyles = [
                "bg-[#C2BBF0] text-[#0b111e]",
                "bg-[#8FB8ED] text-[#0b111e]",
                "bg-[#62BFED] text-[#0b111e]",
                "bg-[#3590F3] text-white",
                "bg-[#F1E3F3] text-[#0b111e]",
              ];
              return (
                <div 
                  key={`u2-${i}`} 
                  className={`${pastelStyles[i % pastelStyles.length]} px-7 py-3 rounded-full text-[0.95rem] font-semibold whitespace-nowrap shadow-sm`}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row (Right to Left) */}
        <div className="flex w-max" ref={bottomTrack}>
          {/* Set 1 */}
          <div className="flex items-center gap-5 pr-5">
            {bottomRowTags.map((tag, i) => {
              const pastelStyles = [
                "bg-[#3590F3] text-white",
                "bg-[#62BFED] text-[#0b111e]",
                "bg-[#8FB8ED] text-[#0b111e]",
                "bg-[#C2BBF0] text-[#0b111e]",
                "bg-[#F1E3F3] text-[#0b111e]",
              ];
              return (
                <div 
                  key={`b1-${i}`} 
                  className={`${pastelStyles[i % pastelStyles.length]} px-7 py-3 rounded-full text-[0.95rem] font-semibold whitespace-nowrap shadow-sm`}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          {/* Set 2 (Identical Clone for Seamless Loop) */}
          <div className="flex items-center gap-5 pr-5">
            {bottomRowTags.map((tag, i) => {
              const pastelStyles = [
                "bg-[#3590F3] text-white",
                "bg-[#62BFED] text-[#0b111e]",
                "bg-[#8FB8ED] text-[#0b111e]",
                "bg-[#C2BBF0] text-[#0b111e]",
                "bg-[#F1E3F3] text-[#0b111e]",
              ];
              return (
                <div 
                  key={`b2-${i}`} 
                  className={`${pastelStyles[i % pastelStyles.length]} px-7 py-3 rounded-full text-[0.95rem] font-semibold whitespace-nowrap shadow-sm`}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
