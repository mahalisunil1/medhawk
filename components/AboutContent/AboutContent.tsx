import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutContent() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. Dark Green Office Parallax/Image Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center">
        <Image src="/about_green_office.jpg" alt="Collaboration" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative z-10 text-white text-3xl md:text-[3.4rem] font-light text-center max-w-5xl leading-[1.2] px-6">
          Built on collaboration, grounded in<br/>
          trust, and designed to navigate<br/>
          complexity together.
        </h2>
      </section>

      {/* 2. Light Cream Section (History/Intro) - Overlaps green image */}
      <section className="relative w-full bg-[#FAF8FD] -mt-16 rounded-t-[3rem] z-20 px-6 md:px-16 lg:px-24 pt-28 pb-40 border-t border-[#C2BBF0]/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[75rem] mx-auto w-full">
          {/* Left Text */}
          <div className="flex flex-col gap-7 text-[#1A1A1A] font-medium text-[15px] leading-[1.7] pr-8">
            <p>
              For over 20 years, MedHawk transforms innovative ideas into
              meaningful solutions, guiding startups, established
              companies, and forward-thinking organizations from initial
              concept to production.
            </p>
            <p>
              What sets us apart is our integrated, human-centered
              approach combined with ISO 13485-certified expertise.
              With MedHawk, you gain more than a development partner:
              you gain a team deeply committed to building products
              that are compliant, well-designed, and built to succeed.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] px-7 py-3 rounded-md text-[13px] font-bold flex items-center gap-3 transition-colors shadow-sm cursor-pointer">
                See our Portfolio <FiArrowRight className="text-lg" />
              </button>
              <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-7 py-3 rounded-md text-[13px] font-bold flex items-center gap-3 transition-all shadow-md cursor-pointer">
                Get in Touch <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto rounded-[1.5rem] overflow-hidden shadow-lg border border-[#C2BBF0]/30">
            <Image src="/about_founder.jpg" alt="Founder" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Slightly Darker Cream Section (Mission) - Overlaps history section */}
      <section className="relative w-full bg-[#FAF8FD] -mt-16 rounded-t-[3rem] z-30 px-6 md:px-16 lg:px-24 py-28 border-t border-[#C2BBF0]/30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 max-w-[75rem] mx-auto w-full">
          {/* Left: Mission Pill & Title */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#C2BBF0] text-[#0b111e] self-start px-5 py-2 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
              OUR MISSION
            </div>
            <h2 className="text-4xl md:text-[3.4rem] font-light text-[#1A1A1A] leading-[1.1] tracking-tight">
              We Exist to<br/>
              Lead Change, Hand<br/>
              in Hand with the<br/>
              Innovators of<br/>
              Tomorrow
            </h2>
          </div>
          
          {/* Right: Mission Text */}
          <div className="flex flex-col gap-6 text-[#1A1A1A] text-[15px] font-medium leading-[1.7] pt-2">
            <p>
              At MedHawk, our mission is clear: <strong>we empower visionary minds to shape<br/>the future.</strong>
            </p>
            <p>
              Since 2005, we have partnered with ambitious teams, guiding them from<br/>
              early concept through to production, transforming their bold ideas into<br/>
              innovative products that improve lives and industries.
            </p>
            <p>
              Whether you are launching a first product or expanding an existing line,<br/>
              MedHawk is committed to driving progress, fostering innovation, and helping<br/>
              you make a lasting impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Glass Office Full Width Image */}
      <section className="relative w-full h-[75vh] min-h-[500px]">
        <Image src="/about_glass_office.jpg" alt="MedHawk Office" fill className="object-cover" />
      </section>

      {/* 4. Soft Blue Vision Section (Overlaps the glass office image with rounded top) */}
      <section className="relative w-full bg-[#8FB8ED] -mt-16 rounded-t-[3rem] z-20 px-6 md:px-16 lg:px-24 py-28 flex flex-col pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 max-w-[75rem] mx-auto w-full">
          {/* Left: Vision Pill & Title */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#3590F3] text-white self-start px-5 py-2 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
              OUR VISION
            </div>
            <h2 className="text-4xl md:text-[3.4rem] font-light text-[#1A1A1A] leading-[1.1] tracking-tight">
              We are Connecting<br/>
              the Dots Between<br/>
              Humans and<br/>
              Technology
            </h2>
          </div>
          
          {/* Right: Vision Text */}
          <div className="flex flex-col gap-6 text-[#1A1A1A] text-[15px] font-medium leading-[1.7] pt-2">
            <p>
              At MedHawk, we believe technology reaches its highest potential when it<br/>
              enriches human lives. Each day, we're driven by a singular vision: to<br/>
              create products that genuinely make the world better. By aligning<br/>
              human-centered innovation with purposeful technology, we strive to<br/>
              leave a lasting, positive mark on people and our planet.
            </p>
            <p>
              Our inspiration comes from the world around us: nature's complexity,<br/>
              human ambition, and the challenges that push us forward. Every idea and<br/>
              every product we design reflects what we stand for: collaboration,<br/>
              progress, and positive impact.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
