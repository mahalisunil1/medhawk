"use client";

import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Expertise() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from('.expertise-anim', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[var(--dark-color)] text-white pt-24 pb-12 px-[5%] flex flex-col gap-16">
      <div className="expertise-anim flex gap-4 flex-wrap">
        <div 
          className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold text-[#0b111e] shadow-sm"
          style={{ background: 'linear-gradient(135deg, #C2BBF0 0%, #F1E3F3 100%)' }}
        >
          Award-Winning Firm
        </div>
        <div 
          className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold text-[#0b111e] bg-[#8FB8ED] shadow-sm"
        >
          Trusted by Leading Enterprises
        </div>
        <div 
          className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold text-[#0b111e] bg-[#62BFED] shadow-sm"
        >
          ISO 13485 Certified
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 items-start">
        <h2 className="expertise-anim flex-[1.1] text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-normal leading-[1.15] tracking-tight">
          End-to-End Product<br />
          Design, Engineering &<br />
          Software Development<br />
          Expertise
        </h2>
        
        <div className="flex-[0.9] flex flex-col gap-8 lg:mt-2">
          <p className="expertise-anim text-[1.2rem] leading-[1.6] text-white/95">
            Our multidisciplinary team turns your ideas into market-<br className="hidden lg:block" />
            ready innovations. Guided by structured and compliant<br className="hidden lg:block" />
            processes, we ensure a smooth, end-to-end<br className="hidden lg:block" />
            development journey, from concept to launch.
          </p>
          <button className="expertise-anim self-start bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-4 rounded-md text-base font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-[1px] shadow-md hover:shadow-lg">
            Get in touch <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
