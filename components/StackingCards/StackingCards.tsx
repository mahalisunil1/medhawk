"use client";

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const projectCards = [
  {
    title: "Revolutionary Oncology Medical Device to Treat Cancer",
    description:
      "Our largest project yet. We designed and engineered the Polartrait, a proprietary and revolutionary medical device developed by Starpax Biopharma to treat cancer.",
    image: "/images/project-oncology.jpg",
    bg: "linear-gradient(135deg, #C2BBF0 0%, #b0a7ea 100%)",
    textColor: "#0b111e",
    descColor: "#202236",
  },
  {
    title: "Console for Calcified Artery Disease Treatment",
    description:
      "We have collaborated with Soundbite Medical to design and develop the latest commercial version of their medical device.",
    image: "/images/project-artery.jpg",
    bg: "linear-gradient(135deg, #8FB8ED 0%, #62BFED 100%)",
    textColor: "#0b111e",
    descColor: "#12253e",
  },
  {
    title: "Ophthalmology Device with Software Driven by AI",
    description:
      "Development of an ophthalmology diagnostic tool using offline image analysis software driven by artificial intelligence (AI).",
    image: "/images/project-ophthalmology.jpg",
    bg: "linear-gradient(135deg, #F1E3F3 0%, #C2BBF0 100%)",
    textColor: "#0b111e",
    descColor: "#252136",
  },
  {
    title: "Smart Patient Monitoring System with Companion App",
    description:
      "Design and engineering of an innovative home-use patient monitoring sensor to track incontinence.",
    image: "/images/project-monitoring.jpg",
    bg: "linear-gradient(135deg, #C2BBF0 0%, #62BFED 50%, #3590F3 100%)",
    textColor: "#0b111e",
    descColor: "#132136",
  },
];

export default function StackingCards() {
  return (
    <section className="bg-[var(--dark-color)] px-[5%] pb-24">
      {/* Stacking Cards — each card is sticky so they stack on top of each other */}
      <div>
        {projectCards.map((card, index) => (
          <div
            key={index}
            className="sticky rounded-[1.5rem] overflow-hidden w-full mb-6 shadow-xl border border-white/20"
            style={{
              background: card.bg,
              top: `${80 + index * 25}px`,
              zIndex: index + 1,
            }}
          >
            <div className="flex flex-col lg:flex-row min-h-[380px] lg:min-h-[420px]">
              {/* Left — Text Content */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5 lg:max-w-[50%]">
                <h3
                  className="text-[1.6rem] md:text-[1.85rem] lg:text-[2.1rem] font-semibold leading-[1.15] tracking-tight"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[0.92rem] md:text-[0.95rem] leading-relaxed max-w-[420px] font-medium"
                  style={{ color: card.descColor }}
                >
                  {card.description}
                </p>
                <button
                  className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.85rem] font-semibold transition-all duration-200 hover:gap-3 w-fit bg-[#0b111e] text-white hover:bg-black shadow-md cursor-pointer"
                >
                  Explore Project <FiArrowRight />
                </button>
              </div>

              {/* Right — Image */}
              <div className="flex-1 relative min-h-[250px] lg:min-h-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover lg:rounded-l-[1.5rem]"
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Projects Button — sits cleanly below the stack */}
      <div className="flex justify-center pt-10">
        <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-3.5 rounded-[12px] font-bold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md text-[0.95rem] cursor-pointer">
          See More Projects <FiArrowRight className="text-lg" />
        </button>
      </div>
    </section>
  );
}
