"use client";
import React from "react";

export default function InsightsHero() {
  return (
    <section className="w-full pt-44 pb-24 px-6 flex flex-col items-center text-center relative z-10 bg-transparent overflow-hidden">
       <div className="relative z-10 flex flex-col items-center">
         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[#C2BBF0]/15 text-[#C2BBF0] border border-[#C2BBF0]/30 mb-6 backdrop-blur-sm">
           Latest Thinking & News
         </div>
         <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">Insights & News</h1>
         <p className="text-gray-300 max-w-2xl text-[14px] leading-relaxed">
           Explore our latest stories, news from human-centered solutions, product development, innovative technology, medical devices, and MedHawk's unique culture.
         </p>
       </div>
    </section>
  );
}
