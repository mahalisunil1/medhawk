"use client";
import React from "react";
import Image from "next/image";

export default function InsightsFeatured() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 pb-16 bg-transparent flex justify-center">
      <div className="w-full max-w-[70rem] bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-xl">
         
         {/* Left Image Placeholder */}
         <div className="w-full md:w-1/2">
            <div className="w-full aspect-[16/9] bg-black rounded-xl overflow-hidden relative border border-[#C2BBF0]/30 shadow-md">
               <Image src="/health_app_ui.jpg" alt="Featured Newsletter" fill className="object-cover opacity-80" />
               <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                  <span className="text-white font-serif italic text-4xl mb-4">Monthly</span>
                  <div className="flex gap-2">
                    <span className="bg-[#C2BBF0] text-[#0b111e] text-[8px] font-bold px-3 py-1 rounded-full shadow-sm">DESIGN</span>
                    <span className="bg-[#3590F3] text-white text-[8px] font-bold px-3 py-1 rounded-full shadow-sm">TECH</span>
                    <span className="bg-[#62BFED] text-[#0b111e] text-[8px] font-bold px-3 py-1 rounded-full shadow-sm">INNOVATION</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Text */}
         <div className="w-full md:w-1/2 flex flex-col items-start gap-4 pr-8">
            <h3 className="text-2xl md:text-[22px] font-light text-black">What's Shaping Product Development</h3>
            <p className="text-[#333333] text-[13px] leading-relaxed max-w-[28rem]">
              Subscribe to our Newsletter & Monthly Digest to stay on our company's latest trends.
            </p>
            <button className="mt-2 bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-2.5 rounded-md text-[13px] font-bold transition-colors shadow-sm cursor-pointer">
              Subscribe now
            </button>
         </div>
      </div>
    </section>
  );
}
