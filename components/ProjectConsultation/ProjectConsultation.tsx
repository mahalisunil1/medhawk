import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function ProjectConsultation() {
  return (
    <section className="bg-transparent pt-10 pb-24 px-6 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Awards Bar Recreated in HTML/CSS for Crispness */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-12 lg:gap-4 mb-20 px-4 md:px-10 text-white">
          
          {/* 1. Greenlight Guru */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-[3.25rem] border-[1.5px] border-white flex flex-col items-center justify-start pt-1.5"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}
            >
              <span className="text-[7px] leading-none font-semibold tracking-wider">TOP</span>
              <span className="text-[1.35rem] font-bold leading-none mt-0.5">5</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold italic tracking-tight">greenlight guru</span>
              <span className="text-[10px] text-gray-400 uppercase mt-1 leading-tight tracking-wider">Top 5 Medical Device<br/>Product Design Companies</span>
            </div>
          </div>

          {/* 2. Clutch */}
          <div className="relative flex items-center justify-center w-[110px] h-[110px]">
            <div 
              className="absolute inset-0 border-2 border-gray-300"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            ></div>
            <div className="flex flex-col items-center z-10 w-full text-center pt-2">
              <span className="text-[6px] uppercase tracking-widest text-gray-300 mb-1 leading-tight">Top<br/>Engineering</span>
              <div className="bg-white w-[105%] py-1 my-0.5">
                <span className="text-black font-extrabold text-[15px] tracking-wide block leading-none">Clutch</span>
              </div>
              <span className="text-[6px] uppercase tracking-widest text-gray-300 mt-1 leading-tight">Canada<br/>2023</span>
            </div>
          </div>

          {/* 3. GoodFirms */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              {/* F logo approximation */}
              <div className="w-[1.6rem] h-[1.6rem] bg-white rounded-[4px] flex items-center justify-center">
                <span className="text-black font-bold text-xl leading-none transform -skew-x-12 mt-0.5">G</span>
              </div>
              <span className="text-[1.65rem] font-medium tracking-tight">GoodFirms</span>
            </div>
            <div className="bg-[#62BFED] text-[#0b111e] text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 self-end mt-1">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              VERIFIED
            </div>
          </div>

          {/* 4. GRANDS PRIX */}
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11">
              <div className="absolute top-0 left-0 w-[1.3rem] h-[1.3rem] bg-[#3590F3]"></div>
              <div className="absolute top-[1.3rem] left-[1.3rem] w-[1.3rem] h-[1.3rem] bg-white"></div>
              <div className="absolute top-[1.3rem] left-0 w-[1.3rem] h-[1.3rem] bg-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold leading-[1.1] tracking-wide">GRANDS PRIX<br/>DU DESIGN</span>
              <span className="text-[11px] text-gray-400 mt-1">Platinum Award</span>
            </div>
          </div>

          {/* 5. BSI */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center mt-2">
                <div className="w-[3.5rem] h-12 border-2 border-white rounded-t-full rounded-b-full flex items-center justify-center">
                  <svg className="w-[1.75rem] h-[1.75rem] text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <span className="absolute -top-3.5 left-2 bg-black px-1.5 text-lg font-normal tracking-wide">bsi</span>
              </div>
              <div className="flex flex-col border-l border-gray-400 pl-3 h-14 justify-center mt-2">
                <span className="text-[11px] font-bold leading-[1.1]">ISO 13485<br/><span className="font-normal text-[9px] leading-[1.1] text-gray-300 block my-1">Quality<br/>Management for<br/>Medical Devices</span></span>
                <span className="text-[11px] font-bold">CERTIFIED</span>
              </div>
            </div>
            <span className="text-[9px] text-white self-end mr-4 mt-2 font-light">FS 703022</span>
          </div>

        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] text-white font-normal mb-16 tracking-tight text-center">
          Let&apos;s Talk About Your Project
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          {/* Left Card */}
          <div className="bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] p-10 md:p-14 flex flex-col justify-between min-h-[350px] shadow-xl">
            <div>
              <h3 className="text-3xl md:text-[2rem] text-[#1a1a1a] font-normal leading-[1.2] mb-6 tracking-tight">
                Free Access to 1:1 Consultation with Product Experts
              </h3>
              <p className="text-[1.05rem] text-gray-700 leading-relaxed max-w-md">
                Get free direct access to our senior product development experts.
              </p>
            </div>
            
            <div className="mt-12 flex items-center justify-between">
              <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-3.5 px-6 rounded-md transition-all text-[0.95rem] flex items-center gap-2 shadow-md cursor-pointer">
                Book Consultation <FiArrowRight />
              </button>
              
              <div className="flex -space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" 
                  alt="Expert 1" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                  alt="Expert 2" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#FAF8FD] border border-[#C2BBF0]/30 rounded-[2rem] p-10 md:p-14 flex flex-col justify-between min-h-[350px] shadow-xl">
            <div>
              <h3 className="text-3xl md:text-[2rem] text-[#1a1a1a] font-normal leading-[1.2] mb-6 tracking-tight">
                Ready to get started on your project?
              </h3>
              <p className="text-[1.05rem] text-[#333333] leading-relaxed max-w-md">
                Our team is ready to help you think, design and engineer it.
              </p>
            </div>
            
            <div className="mt-12">
              <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-3.5 px-6 rounded-md transition-all text-[0.95rem] flex items-center gap-2 shadow-sm cursor-pointer">
                Contact our Team <FiArrowRight />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
