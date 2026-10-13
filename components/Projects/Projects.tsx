"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-anim', {
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
    <section ref={container} className="bg-[var(--dark-color)] px-[5%] py-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        
        {/* Left Side Text Content */}
        <div className="flex-1 max-w-[800px]">
          {/* Badge */}
          <div className="projects-anim bg-[#62BFED] text-[#0b111e] text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider w-fit mb-8 shadow-sm">
            Projects
          </div>

          {/* Heading */}
          <h2 className="projects-anim text-[2.8rem] lg:text-[4rem] font-normal leading-[1.1] text-white tracking-tight mb-8">
            Discover the innovations<br className="hidden md:block" />
            we've brought to life
          </h2>

          {/* Paragraph */}
          <p className="projects-anim text-[1.05rem] text-white/80 leading-relaxed font-normal max-w-[700px]">
            From life-saving MedTech innovations to intuitive digital experiences, breakthrough consumer
            products, and cutting-edge industrial solutions, explore our projects.
          </p>
        </div>

        {/* Right Side Button */}
        <div className="projects-anim shrink-0 pb-1">
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-3.5 rounded-[12px] font-bold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md text-[0.95rem] whitespace-nowrap">
            Explore Projects <FiArrowRight className="text-xl" />
          </button>
        </div>

      </div>
    </section>
  );
}
