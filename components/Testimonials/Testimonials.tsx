"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonials = [
  {
    text: "Working with MedHawk has been an outstanding experience. Their seamless integration with our internal resources has greatly enhanced our approach to product design, always prioritizing the patient and their unique needs.",
    name: "Jenna B.",
    title: "Director of Engineering",
    company: "SoundBite Medical",
    avatar: "/images/avatar-jenna.jpg",
  },
  {
    text: "With the support of MedHawk, we are more confident than ever in the decisions made. All members of the MedHawk team are great experts and professionals, covering a broad spectrum of aspects that a medical device project needs.",
    name: "Dumitru L.",
    title: "Technical Director",
    company: "OxyNov",
    avatar: "/images/avatar-dumitru.jpg",
  },
  {
    text: "To undertake ambitious and innovative projects, choosing the right partners is essential. MedHawk, with its expertise and ingenuity, serves as a true extension of our resources. Their contribution has been invaluable.",
    name: "Thierry P.",
    title: "Chief Operating Officer",
    company: "Starpax Biopharma",
    avatar: "/images/avatar-thierry.jpg",
  },
  {
    text: "MedHawk's rigorous approach to quality and risk management gave us complete peace of mind during our regulatory submission. Their team feels like a natural extension of our own, bringing deep domain knowledge.",
    name: "Sarah M.",
    title: "VP of Product",
    company: "CardioWave Tech",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    text: "The speed at which MedHawk took our rough benchtop prototype into an ISO 13485 compliant, market-ready surgical console exceeded our board's expectations. Their engineering rigor is unmatched.",
    name: "Marcus V.",
    title: "Founder & CEO",
    company: "NeuroVance Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isInteractingRef = useRef(false);

  // Smoothly scroll to a specific testimonial card
  const scrollToCard = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.testimonial-card');
    if (cards[index]) {
      const targetCard = cards[index] as HTMLElement;
      scrollRef.current.scrollTo({
        left: targetCard.offsetLeft - scrollRef.current.offsetLeft - 16,
        behavior: 'smooth',
      });
    }
  }, []);

  // Update current index when user drags or manually scrolls
  const handleScroll = () => {
    if (!scrollRef.current || isInteractingRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.testimonial-card');
    if (cards.length > 0) {
      const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (index >= 0 && index < testimonials.length && index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  // Auto carousel timer
  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % testimonials.length;
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, scrollToCard]);

  // Navigate to previous slide
  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToCard(prevIndex);
  };

  // Navigate to next slide
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  // Jump to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToCard(index);
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isInteractingRef.current = true;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 300);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 300);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#0b111e] text-white py-24 pl-[5%] flex flex-col lg:flex-row overflow-hidden relative selection:bg-[#3590F3]/20 border-t border-white/5">
      {/* Left Panel */}
      <div className="w-full lg:w-[35%] pr-8 lg:pr-12 flex flex-col justify-center flex-shrink-0 z-10 mb-12 lg:mb-0">
        
        {/* Badge */}
        <div className="bg-[#C2BBF0] text-[#0b111e] text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider w-fit mb-8 shadow-sm">
          Testimonials
        </div>

        {/* Heading */}
        <h2 className="text-[2.8rem] lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight mb-8 text-white">
          What Our 300+<br />
          Partners Say<br />
          About Us
        </h2>

        {/* Ratings Section */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex text-[#62BFED] text-xl gap-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
          </div>
          <p className="text-[0.95rem] text-white/90">
            4.6 / 5 Stars Customer Satisfaction Rating
          </p>
        </div>

        {/* Industry Badges */}
        <div className="flex items-center gap-8 opacity-80 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 border-2 border-white/30 rounded-lg flex items-center justify-center rotate-45 relative overflow-hidden">
              <div className="-rotate-45 font-bold text-[0.8rem] text-center leading-tight">Clutch<br/><span className="text-[0.5rem] font-normal">TOP<br/>RATED</span></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex flex-col">
               <span className="font-bold text-lg leading-none">greenlight guru</span>
               <span className="text-[0.6rem] uppercase tracking-wide mt-1 text-white/70">Top 5 Medical Device<br/>Product Design Companies</span>
             </div>
          </div>
        </div>

        {/* Auto Carousel Navigation Controls */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-2.5">
            <button 
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#3590F3] hover:border-[#3590F3] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <FiArrowLeft className="text-lg" />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#3590F3] hover:border-[#3590F3] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <FiArrowRight className="text-lg" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#3590F3] shadow-[0_0_12px_rgba(53,144,243,0.6)]' 
                    : 'w-2.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Carousel Status Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 tracking-wider uppercase ml-auto">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-[#62BFED] animate-pulse'}`}></span>
            {isPaused ? 'Paused' : 'Auto'}
          </div>
        </div>

      </div>

      {/* Right Panel - Auto Carousel Container */}
      <div 
        className="w-full lg:w-[65%] relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 95%, transparent)'
        }}
      >
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-4 px-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {testimonials.map((item, index) => {
            const isActive = currentIndex === index;
            return (
              <div 
                key={index} 
                className={`testimonial-card flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[calc(50%-12px)] bg-[#FAF8FD] text-[#1a1a1a] p-8 md:p-10 rounded-[1.5rem] flex flex-col justify-between min-h-[310px] border transition-all duration-300 shadow-xl relative ${
                  isActive 
                    ? 'border-[#3590F3]/60 ring-1 ring-[#3590F3]/30 scale-[1.01]' 
                    : 'border-[#C2BBF0]/30 hover:border-[#62BFED]/50'
                }`}
                style={{
                  pointerEvents: isDragging ? 'none' : 'auto', 
                }}
              >
                {/* Decorative Quotation Mark */}
                <div className="absolute top-6 right-8 text-[#C2BBF0]/30 text-5xl font-serif pointer-events-none select-none leading-none">
                  “
                </div>

                {/* Rating Stars for Card */}
                <div className="flex text-[#62BFED] text-xs gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-[0.95rem] text-[#18181B] leading-relaxed mb-8 relative z-10 font-normal">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#C2BBF0]/20">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover shadow-sm pointer-events-none border border-[#C2BBF0]/40"
                    draggable="false"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-[1.05rem] text-[#0b111e] leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-[0.82rem] text-[#555555] mt-0.5 font-medium">
                      {item.title} {item.company ? `• ${item.company}` : ''}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Spacer for the right edge so the last card has padding when fully scrolled */}
          <div className="flex-shrink-0 w-8"></div>
        </div>
        
        {/* Custom scrollbar hiding CSS for this section */}
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
    </section>
  );
}
