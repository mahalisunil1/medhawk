"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const animatedWords = [
  "Refining",
  "Designing",
  "Building",
  "Prototyping",
  "Growing",
  "Innovating",
];

export default function AboutTogether() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const wordElements = containerRef.current.children;
    const tl = gsap.timeline({ repeat: -1 });

    // Initially hide all words
    gsap.set(wordElements, { visibility: "hidden" });

    Array.from(wordElements).forEach((wordEl) => {
      const chars = wordEl.querySelectorAll(".char");
      
      tl.set(wordEl, { visibility: "visible" })
        .fromTo(
          chars, 
          { opacity: 0, y: 15, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.05, ease: "power2.out" }
        )
        .to({}, { duration: 1.8 }) // Pause so the user can read the word
        .to(
          chars, 
          { opacity: 0, y: -15, filter: "blur(4px)", duration: 0.4, stagger: 0.03, ease: "power2.in" }
        )
        .set(wordEl, { visibility: "hidden" });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] bg-gradient-to-br from-[#15223c] via-[#0c1424] to-[#070c16] z-50 -mt-16 rounded-t-[3rem] overflow-hidden flex items-center justify-center border-t border-white/5">
      
      {/* Texture / Noise Overlay for cinematic gradient */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 flex justify-center items-center font-sans">
        
        {/* Left Side: Animated Changing Words */}
        <div className="flex w-1/2 justify-end pr-2 md:pr-4">
          <div ref={containerRef} className="relative h-[80px] md:h-[120px] w-[200px] md:w-[400px]">
            {animatedWords.map((word, wIdx) => (
              <div key={wIdx} className="absolute inset-y-0 right-0 flex items-center invisible">
                {word.split("").map((char, cIdx) => (
                  <span 
                    key={cIdx} 
                    className="char inline-block text-3xl md:text-5xl lg:text-[4rem] font-light text-[#62BFED] tracking-wide"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Constant "Together" */}
        <div className="flex w-1/2 justify-start pl-2 md:pl-4">
          <div className="flex items-center h-[80px] md:h-[120px]">
            <span className="text-3xl md:text-5xl lg:text-[4rem] font-light text-[#3590F3] tracking-wide">
              Together
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
