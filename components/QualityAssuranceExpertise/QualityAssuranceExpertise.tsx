import React from 'react';
import Image from 'next/image';

export default function QualityAssuranceExpertise() {
  const cards = [
    {
      title: "Quality Assurance",
      description: "With our ISO 13485 certification, you can be sure that your product development process follows the standards and regulatory requirements.",
      image: "/quality_assurance.jpg",
      alt: "Quality Assurance Meeting"
    }
  ];

  return (
    <section className="bg-transparent text-white pb-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight mb-12">
          Quality Assurance Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#FAF8FD] rounded-[2rem] flex flex-col text-[#18181B] h-full shadow-lg border border-[#C2BBF0]/30 hover:border-[#3590F3]/60 transition-all">
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
                  <button className="bg-[#3590F3] text-white px-6 py-3 rounded-lg text-[0.95rem] font-semibold flex items-center gap-2 hover:bg-[#62BFED] hover:text-[#0b111e] transition-all shadow-md">
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
