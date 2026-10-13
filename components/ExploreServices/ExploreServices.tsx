import React from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function ExploreServices() {
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

  return (
    <section className="bg-transparent text-white pb-24 px-6 md:px-10 lg:px-20 pt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight mb-16 text-center">
          Explore our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#FAF8FD] text-[#18181B] p-8 rounded-[1.5rem] flex flex-col justify-between min-h-[320px] cursor-pointer group border border-[#C2BBF0]/30 hover:border-[#3590F3]/60 shadow-md hover:shadow-xl transition-all">
              <div>
                <h3 className="text-[1.75rem] font-normal leading-[1.1] mb-4 whitespace-pre-line tracking-tight text-[#18181B]">
                  {card.title}
                </h3>
                <p className="text-[0.95rem] text-gray-700 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="self-end text-3xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <FiArrowUpRight strokeWidth={2.5} className="text-[#18181B] group-hover:text-[#3590F3] transition-colors" />
              </div>
            </div>
          ))}
          
          {/* Dark CTA Card */}
          <div className="border-[2px] border-[#62BFED]/60 hover:border-[#62BFED] p-8 rounded-[1.5rem] flex flex-col justify-center items-start gap-8 min-h-[320px] bg-gradient-to-br from-[#62BFED]/10 to-transparent transition-all">
            <h3 className="text-[2rem] font-normal leading-tight tracking-tight text-white">
              One Team. Every Stage of Product Development.
            </h3>
            <button className="bg-[#3590F3] text-white px-6 py-3.5 rounded-lg text-[0.95rem] font-bold flex items-center gap-2 transition-all hover:bg-[#62BFED] hover:text-[#0b111e] shadow-md hover:shadow-lg">
              Explore all services <FiArrowRight strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
