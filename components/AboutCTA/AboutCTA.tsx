"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-transparent z-50 px-6 md:px-16 lg:px-24 py-32 overflow-hidden flex justify-center">
      
      {/* Main CTA Card */}
      <div className="w-full max-w-[80rem] bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] p-12 md:p-16 lg:px-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-center shadow-2xl">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-light text-[#1A1A1A] tracking-tight mb-2">
            What Innovation Do We Build Next?
          </h2>
          
          <div className="flex flex-col text-[#1A1A1A] text-[15px] leading-[1.7] font-medium max-w-[34rem]">
            <p>
              Let’s explore how we can bring your next product to life, together. Whether<br/>
              you have a clear roadmap or just an idea, we’re here to listen, challenge, and<br/>
              build with you.
            </p>
          </div>

          <button className="mt-4 bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] self-start px-7 py-3 rounded-md text-[14px] font-bold flex items-center gap-2 transition-colors shadow-sm cursor-pointer">
            Start a Project <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Right Content - Perfect Math Avatar Ring */}
        <div className="flex justify-center items-center lg:ml-auto lg:mr-10">
          {/* Container exactly 300x300, avatars 80x80 (w-20), radius 110 */}
          <div className="relative w-[300px] h-[300px]">
            
            {/* Top */}
            <div className="absolute left-[110px] top-[0px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_1.jpg" alt="Team" fill className="object-cover" />
            </div>
            
            {/* Top Right */}
            <div className="absolute left-[205px] top-[55px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_2.jpg" alt="Team" fill className="object-cover" />
            </div>
            
            {/* Bottom Right */}
            <div className="absolute left-[205px] top-[165px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_3.jpg" alt="Team" fill className="object-cover" />
            </div>
            
            {/* Bottom */}
            <div className="absolute left-[110px] top-[220px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_5.jpg" alt="Team" fill className="object-cover" />
            </div>
            
            {/* Bottom Left */}
            <div className="absolute left-[15px] top-[165px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_4.jpg" alt="Team" fill className="object-cover" />
            </div>
            
            {/* Top Left */}
            <div className="absolute left-[15px] top-[55px] w-20 h-20 rounded-full overflow-hidden shadow-lg z-10 transition-transform hover:scale-110">
              <Image src="/team_2.jpg" alt="Team" fill className="object-cover" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
