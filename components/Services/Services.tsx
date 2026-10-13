"use client";

import React, { useRef } from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from('.services-anim', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: container });

  const cards = [
    {
      title: "Medical Device\nDevelopment",
      desc: "Integrated medical device development from concept to regulatory submission, under one ISO 13485-certified team."
    },
    {
      title: "New Product\nDevelopment",
      desc: "Full-cycle new product development across industries, from industrial equipment to consumer electronics."
    },
    {
      title: "Product\nEnhancement &\nProgram Acceleration",
      desc: "Targeted expertise to improve existing products, resolve blockers, and get stalled programs back on track."
    },
    {
      title: "Quality, Risk &\nRegulatory\nManagement",
      desc: "Structured quality, risk, and regulatory processes built into development from day one."
    },
    {
      title: "Manufacturing\nSupport",
      desc: "Bridging the gap between design and production with manufacturing-ready documentation and supplier coordination."
    }
  ];

  const expertiseTags = [
    "Human Factors Engineering",
    "Industrial Design",
    "UX & UI Design",
    "Mechanical Engineering",
    "Electronic Engineering",
    "Software Development",
    "Firmware Development",
    "Quality Assurance"
  ];

  const stats = [
    { value: "2,500+", label: "Project Completed" },
    { value: "20", label: "Years of Innovation" },
    { value: "300+", label: "Customers" },
    { value: "0", label: "Non-Conformities in\nour Last Audit" }
  ];

  return (
    <section ref={container} className="bg-[var(--dark-color)] text-white px-[5%] pt-12 pb-8 flex flex-col gap-24">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 services-anim">
        {cards.map((card, index) => (
          <div key={index} className="bg-white text-black p-8 rounded-2xl flex flex-col justify-between min-h-[320px] cursor-pointer group">
            <div>
              <h3 className="text-[1.75rem] font-normal leading-[1.1] mb-4 whitespace-pre-line tracking-tight">
                {card.title}
              </h3>
              <p className="text-[0.95rem] text-gray-700 leading-relaxed">
                {card.desc}
              </p>
            </div>
            <div className="self-end text-3xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <FiArrowUpRight />
            </div>
          </div>
        ))}
        
        {/* Dark CTA Card */}
        <div className="border-[3px] border-[#62BFED]/60 p-8 rounded-2xl flex flex-col justify-center items-start gap-8 min-h-[320px] bg-white/5 backdrop-blur-sm">
          <h3 className="text-[2rem] font-normal leading-tight tracking-tight">
            One Team. Every Stage of Product Development.
          </h3>
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-6 py-3.5 rounded-md font-semibold flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
            Explore all services <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Expertise Tags Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center services-anim">
        <h2 className="text-[2rem] font-normal min-w-[150px]">Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {expertiseTags.map((tag, idx) => {
            const pastelStyles = [
              "bg-[#C2BBF0] text-[#0b111e]",
              "bg-[#8FB8ED] text-[#0b111e]",
              "bg-[#62BFED] text-[#0b111e]",
              "bg-[#3590F3] text-white",
              "bg-[#F1E3F3] text-[#0b111e]",
            ];
            return (
              <span 
                key={idx} 
                className={`${pastelStyles[idx % pastelStyles.length]} px-5 py-2.5 rounded-full text-[0.9rem] font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-default`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-between items-center gap-10 border-t border-white/20 pt-16 services-anim">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-2">
            <span className="text-[3rem] font-bold tracking-tight">
              {stat.value}
            </span>
            <span className="text-[1rem] text-white/80 whitespace-pre-line">
              {stat.label}
            </span>
          </div>
        ))}
        {/* BSI Logo Premium SVG */}
        <div className="flex items-center justify-center opacity-90">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2"/>
            <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="1" strokeDasharray="4 2"/>
            <path d="M50 20L60 40H80L65 55L70 75L50 62L30 75L35 55L20 40H40L50 20Z" fill="white" opacity="0.1" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">bsi</text>
            <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9">ISO 13485</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
