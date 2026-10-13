"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const blogPosts = [
  {
    title: "Medical Device Product Development: The 5 Phases, From Concept to Market",
    date: "September 2026",
    image: "/images/blog-phases.jpg",
  },
  {
    title: "Medical Device Compliance: What It Takes to Get to Market",
    date: "September 2026",
    image: "/images/blog-compliance.jpg",
  },
  {
    title: "MedHawk Turns 20: The Milestones That Shaped Our Story",
    date: "September 2026",
    image: "/images/blog-milestones.jpg",
  },
];

export default function Blog() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from('.blog-anim', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="px-[5%] py-24"
      style={{ backgroundColor: '#8FB8ED' }}
    >
      {/* Top Row: Badge + Heading + Button */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 mb-14">
        {/* Left side */}
        <div className="flex flex-col gap-5 max-w-[700px]">
          {/* Badge */}
          <div className="blog-anim bg-[#C2BBF0] text-[#0b111e] text-[0.7rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider w-fit shadow-sm">
            Content Hub
          </div>

          {/* Heading */}
          <h2 className="blog-anim text-[2.4rem] lg:text-[3rem] font-normal leading-[1.1] text-[#1a1a1a] tracking-tight">
            What&apos;s New on the Blog
          </h2>

          {/* Subtitle */}
          <p className="blog-anim text-[1rem] text-[#333333] leading-relaxed">
            Explore over 100+ pieces of content to help you on your product development journey.
          </p>
        </div>

        {/* Right side button */}
        <div className="blog-anim shrink-0 lg:mt-12">
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md text-[0.9rem] whitespace-nowrap cursor-pointer">
            Explore the blog <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog-anim bg-white rounded-[1.25rem] overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1 shadow-md"
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              {/* Title */}
              <h3 className="text-[1.15rem] font-semibold leading-[1.3] text-[#1a1a1a] tracking-tight min-h-[3.5rem] group-hover:text-[#3590F3] transition-colors">
                {post.title}
              </h3>

              {/* Date + Arrow Row */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[0.85rem] text-[#666666]">
                  {post.date}
                </span>
                <div className="w-9 h-9 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#3590F3] group-hover:text-white group-hover:border-[#3590F3] text-[#1a1a1a]">
                  <FiArrowUpRight className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
