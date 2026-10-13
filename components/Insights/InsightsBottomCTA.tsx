"use client";
import React from "react";

export default function InsightsBottomCTA() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 pb-32 bg-transparent flex justify-center">
      <div className="w-full max-w-[70rem] bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] p-12 md:py-16 flex flex-col items-center text-center gap-5 shadow-2xl">
         
         <h2 className="text-2xl md:text-3xl font-light text-[#1A1A1A]">Stay Up To Date With New Releases</h2>
         
         <p className="text-[#333333] text-[13px] max-w-lg leading-relaxed">
           We are building modern technology in an ever-changing world. The most important news from human-centered solutions, product development, and medical devices.
         </p>
         
         <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-8 py-3 rounded-md text-[13px] font-bold transition-colors mt-2 shadow-sm cursor-pointer">
            Subscribe now
         </button>

      </div>
    </section>
  );
}
