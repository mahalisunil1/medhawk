"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function AboutCulture() {
  return (
    <section className="relative w-full bg-[#C2BBF0] z-50 -mt-16 rounded-t-[3rem] px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-center max-w-[75rem] mx-auto w-full">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="bg-[#3590F3] text-white self-start px-5 py-2 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
            OUR CULTURE
          </div>
          
          <h2 className="text-4xl md:text-[3.2rem] lg:text-[3.4rem] font-light leading-[1.1] tracking-tight text-[#1A1A1A] mb-2">
            Where Ideas Spark and<br/>
            People Thrive
          </h2>
          
          <div className="flex flex-col gap-6 text-[#1A1A1A] text-[15.5px] leading-[1.7] font-medium pr-4 pt-2">
            <p>
              Working at MedHawk means being part of a vibrant,<br/>
              creative environment where multi-talented, multi-<br/>
              passionate people come together to build what’s next.
            </p>
            <p>
              Our team thrives on collaboration, openness, and the<br/>
              joy of meaningful work. We cultivate a culture where<br/>
              great innovation and well-being go hand in hand. Here,<br/>
              creativity flourishes, individual strengths are valued,<br/>
              and everyone contributes to something larger than<br/>
              themselves.
            </p>
            <p>
              Whether we’re testing limits outdoors or in the lab, we<br/>
              go further, together.
            </p>
          </div>

          <button className="mt-4 bg-[#18181B] text-white self-start px-7 py-3.5 rounded-md text-[13px] font-bold flex items-center gap-3 hover:bg-black transition-colors shadow-md cursor-pointer">
            Our Culture & Values <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Right Story Widget Container */}
        <div className="flex flex-col items-center gap-4 lg:ml-auto mr-12 mt-8 lg:mt-0">
          <p className="text-black font-bold text-[13px] tracking-wide">Latest Stories</p>
          
          <div className="relative w-full min-w-[280px] max-w-[300px] aspect-[9/16] rounded-[2rem] overflow-visible shadow-2xl">
            {/* Story Image Base */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-black">
              <Image src="/culture_cycling.jpg" alt="Team Cycling" fill className="object-cover" />
              {/* Top Gradient for UI readability */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
            </div>

            {/* Story Top UI */}
            <div className="absolute top-5 left-4 right-4 flex flex-col gap-3">
              {/* Progress Bars */}
              <div className="flex gap-1.5">
                <div className="h-0.5 bg-white flex-1 rounded-full opacity-100"></div>
                <div className="h-0.5 bg-white/40 flex-1 rounded-full"></div>
                <div className="h-0.5 bg-white/40 flex-1 rounded-full"></div>
                <div className="h-0.5 bg-white/40 flex-1 rounded-full"></div>
              </div>
              
              {/* Profile Header */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold tracking-widest">medhawk</span>
                </div>
                <span className="text-white text-[10px] font-bold tracking-wider">MEDHAWK</span>
              </div>
            </div>

            {/* Bottom Glowing Logo Badge (Overlapping Bottom Right) */}
            <div className="absolute right-4 -bottom-8 flex flex-col items-center">
              {/* Glowing ring */}
              <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#3590F3] via-[#62BFED] to-[#C2BBF0] p-[3px] shadow-[0_0_20px_rgba(53,144,243,0.4)]">
                {/* Inner Black Circle */}
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-sans font-bold text-[15px] tracking-tighter">
                    medhawk
                  </span>
                </div>
              </div>
              {/* Small azure tag */}
              <div className="bg-[#3590F3] text-white text-[8px] font-bold px-2 py-0.5 rounded-full mt-1.5 z-10 shadow-sm">
                @hellomedhawk
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
