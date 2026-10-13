import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const avatars = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
];

export default function ExpertiseCTA() {
  return (
    <section className="bg-transparent text-white pb-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] lg:rounded-[3.5rem] py-20 px-8 flex flex-col items-center justify-center text-center shadow-xl">
        
        {/* Overlapping Avatars */}
        <div className="flex items-center justify-center mb-10">
          {avatars.map((url, idx) => (
            <div 
              key={idx} 
              className={`w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden border-4 border-[#FAF8FD] shadow-sm ${idx !== 0 ? '-ml-5' : ''}`}
            >
              <img src={url} alt={`Expert ${idx+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <h2 className="text-[2.25rem] md:text-4xl lg:text-[3.25rem] font-normal leading-[1.2] text-[#1a1a1a] tracking-tight max-w-4xl mb-6">
          Want Your Innovative Ideas to Create a<br className="hidden md:block"/> Positive Impact?
        </h2>
        
        <p className="text-[1.1rem] md:text-[1.25rem] text-[#333333] mb-12 font-medium">
          Our experts always got your back.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Sky Blue Button */}
          <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-4 px-8 rounded-[12px] whitespace-nowrap shadow-sm flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 text-[0.95rem] cursor-pointer">
            Get Free Consultation <FiArrowRight className="text-lg" />
          </button>
          
          {/* Azure Primary Button with outline wrapper */}
          <div className="p-[5px] rounded-[16px] bg-[#62BFED]/30 transition-transform duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer">
            <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3.5 px-8 rounded-[11px] whitespace-nowrap text-[0.95rem] flex items-center gap-2 shadow-md transition-all cursor-pointer">
              Get in Touch <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
