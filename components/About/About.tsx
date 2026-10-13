"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.about-anim', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#FAF8FD] border-y border-[#C2BBF0]/30 px-[5%] py-24 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">
      {/* Left side text */}
      <div className="flex-1 flex flex-col items-start gap-8 max-w-[650px]">
        {/* Badge */}
        <div className="about-anim bg-[#C2BBF0] text-[#0b111e] text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider w-fit shadow-sm">
          About Us
        </div>

        {/* Heading */}
        <h2 className="about-anim text-[2.8rem] lg:text-[3.5rem] font-normal leading-[1.05] text-[#1a1a1a] tracking-tight">
          We push innovation boundaries by connecting the dots between humans and technology
        </h2>

        {/* Paragraphs */}
        <div className="about-anim flex flex-col gap-6 text-[1.05rem] text-[#333333] leading-relaxed font-normal">
          <p>
            With our integrated, user-centered approach to product development,
            we design innovations that truly meet the needs of your market and
            end-users.
          </p>
          <p>
            Whether you're an established company seeking expert support or a
            startup with a groundbreaking idea, we help you strike the perfect
            balance between innovation, usability, and real-world impact.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="about-anim flex flex-wrap items-center gap-8 mt-2">
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-3.5 rounded-[12px] font-bold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md text-[0.95rem]">
            About Us <FiArrowRight className="text-lg" />
          </button>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[42px] h-[42px] rounded-full border-2 border-[#62BFED] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#62BFED] group-hover:text-[#0b111e] text-[#18181B]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span className="font-bold text-[1.05rem] text-[#1a1a1a]">Play Video</span>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
        <div className="about-anim relative w-full max-w-[550px] aspect-square lg:aspect-[4/4.5] rounded-[2rem] overflow-hidden">
          <img 
            src="/images/about.jpg" 
            alt="Medical expert in surgery" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
