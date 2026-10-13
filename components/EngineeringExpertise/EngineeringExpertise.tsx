import React from 'react';
import Image from 'next/image';

export default function EngineeringExpertise() {
  const cards = [
    {
      title: (
        <>
          Mechanical<br />Engineering
        </>
      ),
      description: "We merge creativity and engineering rigor to create next-generation technology.",
      image: "/mechanical_engineering.jpg",
      alt: "Mechanical Engineering CAD Design"
    },
    {
      title: (
        <>
          Electronic Engineering
        </>
      ),
      description: "We integrate advanced electronic systems to bring your product to life.",
      image: "/electronic_engineering.jpg",
      alt: "Electronic Engineering PCB Work"
    },
    {
      title: (
        <>
          Software<br />Development
        </>
      ),
      description: "We design and implement advanced software tailored for cutting-edge applications.",
      image: "/software_development.jpg",
      alt: "Software Development Coding"
    },
    {
      title: (
        <>
          Embedded Software<br />Development
        </>
      ),
      description: "We focus on the seamless integration of software for optimal performance and reliability.",
      image: "/embedded_software.jpg",
      alt: "Embedded Software Development Dual Monitor setup"
    }
  ];

  return (
    <section className="bg-transparent text-white pb-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight mb-12">
          Engineering Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#FAF8FD] rounded-[2rem] flex flex-col text-[#18181B] h-full shadow-lg border border-[#62BFED]/30 hover:border-[#62BFED]/70 transition-all">
              {/* Image Container */}
              <div className="w-full relative h-[240px] lg:h-[280px] shrink-0">
                <Image 
                  src={card.image} 
                  alt={card.alt} 
                  fill 
                  className="object-cover rounded-t-[2rem] rounded-b-[1.75rem]" 
                />
              </div>
              
              {/* Text Content */}
              <div className="p-8 lg:p-10 flex flex-col grow">
                <h3 className="text-[1.65rem] lg:text-[1.85rem] font-normal leading-tight mb-4 tracking-tight text-[#18181B]">
                  {card.title}
                </h3>
                <p className="text-[1.05rem] leading-relaxed text-gray-700 mb-8 grow font-light">
                  {card.description}
                </p>
                
                <div>
                  <button className="bg-[#62BFED] text-[#0b111e] px-6 py-3 rounded-lg text-[0.95rem] font-semibold flex items-center gap-2 hover:bg-[#8FB8ED] transition-all shadow-sm hover:shadow-md">
                    Explore <span className="ml-1 leading-none text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
