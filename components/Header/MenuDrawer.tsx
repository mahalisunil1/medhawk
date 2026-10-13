"use client";

import React, { useRef, useState, useEffect } from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiX, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import gsap from 'gsap';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Scroll functionality for stories
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const stories = [
    { image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=150&q=80", title: "Demo Day\nCentech" },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&q=80", title: "Welcome in the\nteam Yann!" },
    { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&q=80", title: "Breakfast with\nthe Team" },
    { image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=150&q=80", title: "MedHawk 10\nRecords" }
  ];

  useEffect(() => {
    // Calculate the physical width of the browser's scrollbar
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const header = document.getElementById('main-header');

    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.35, ease: 'power2.out' });
      gsap.to(drawerRef.current, { x: 0, duration: 0.45, ease: 'power3.out' });
      
      // GSAP stagger animation for mobile drawer links and buttons
      if (drawerRef.current) {
        const items = drawerRef.current.querySelectorAll('.drawer-item');
        const btns = drawerRef.current.querySelectorAll('.drawer-btn');
        if (items.length > 0) {
          gsap.fromTo(items, 
            { opacity: 0, x: 25 }, 
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.15 }
          );
        }
        if (btns.length > 0) {
          gsap.fromTo(btns, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 0.35, stagger: 0.08, ease: 'power2.out', delay: 0.3 }
          );
        }
      }

      // Lock scroll and prevent layout shift by substituting the scrollbar with padding
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (header) header.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3, ease: 'power2.in' });
      gsap.to(drawerRef.current, { x: '100%', duration: 0.35, ease: 'power3.in' });
      
      // Restore scroll and remove padding
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (header) header.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (header) header.style.paddingRight = '';
    };
  }, [isOpen]);

  // Drag logic
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* Overlay Backdrop */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 z-[90] opacity-0 pointer-events-none"
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-[100dvh] w-[86%] sm:w-[75%] lg:w-full lg:max-w-[420px] bg-[#FAF8FD] lg:bg-[#FAF8FD] z-[95] translate-x-full shadow-2xl flex flex-col overflow-y-auto border-l border-[#C2BBF0]/30"
      >
        {/* MOBILE VIEW (Exact Match for Screenshot 3) */}
        <div className="lg:hidden flex flex-col h-full justify-between p-8 pt-10 font-sans">
          <div className="flex flex-col">
            {/* Top Close Button (X) */}
            <button 
              onClick={onClose}
              className="text-[#1A1A1A] hover:opacity-80 transition-opacity self-start mb-10 -ml-1 cursor-pointer p-1"
              aria-label="Close menu"
            >
              <FiX className="text-3xl stroke-[1.5]" />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col gap-5">
              <Link 
                href="/projects" 
                onClick={onClose}
                className="drawer-item text-[1.6rem] font-normal text-[#1A1A1A] hover:text-[#3590F3] transition-colors w-fit"
              >
                Projects
              </Link>
              <Link 
                href="/services" 
                onClick={onClose}
                className="drawer-item text-[1.6rem] font-normal text-[#1A1A1A] hover:text-[#3590F3] transition-colors flex items-center gap-2 w-fit"
              >
                <span>Services</span>
                <span className="text-[1.3rem] font-light leading-none">+</span>
              </Link>
              <Link 
                href="/expertise" 
                onClick={onClose}
                className="drawer-item text-[1.6rem] font-normal text-[#1A1A1A] hover:text-[#3590F3] transition-colors flex items-center gap-2 w-fit"
              >
                <span>Expertise</span>
                <span className="text-[1.3rem] font-light leading-none">+</span>
              </Link>
              <Link 
                href="/about" 
                onClick={onClose}
                className="drawer-item text-[1.6rem] font-normal text-[#1A1A1A] hover:text-[#3590F3] transition-colors flex items-center gap-2 w-fit"
              >
                <span>About Us</span>
                <span className="text-[1.3rem] font-light leading-none">+</span>
              </Link>
              <Link 
                href="/insights" 
                onClick={onClose}
                className="drawer-item text-[1.6rem] font-normal text-[#1A1A1A] hover:text-[#3590F3] transition-colors flex items-center gap-2 w-fit"
              >
                <span>Insights</span>
                <span className="text-[1.3rem] font-light leading-none">+</span>
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-3.5">
              <Link 
                href="/contact" 
                onClick={onClose}
                className="drawer-btn bg-[#3590F3] text-white font-bold text-[15px] px-6 py-3.5 rounded-[10px] flex items-center justify-between w-fit min-w-[155px] gap-3 hover:bg-[#62BFED] hover:text-[#0b111e] transition-all shadow-md"
              >
                <span>Contact Us</span>
                <FiArrowRight className="text-lg" />
              </Link>
              <Link 
                href="/contact" 
                onClick={onClose}
                className="drawer-btn bg-[#62BFED] text-[#0b111e] font-bold text-[15px] px-6 py-3.5 rounded-[10px] flex items-center justify-between w-fit min-w-[195px] gap-3 hover:bg-[#8FB8ED] transition-all shadow-sm"
              >
                <span>Free Consultation</span>
                <FiArrowRight className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="drawer-btn pt-10 text-[#1A1A1A] text-[1.15rem] font-normal cursor-pointer hover:opacity-70 transition-opacity">
            Français
          </div>
        </div>

        {/* DESKTOP VIEW (Preserves existing Desktop Drawer) */}
        <div className="hidden lg:flex flex-col px-10 py-6 pt-[85px]">
          <div className="text-[1.2rem] font-normal text-[#1a1a1a] mb-8 cursor-pointer hover:opacity-70 transition-opacity tracking-wide">
            Français
          </div>
          
          <hr className="border-gray-200" />
          
          {/* Latest Stories */}
          <div className="py-8">
            <h3 className="text-[2.2rem] font-light text-[#0d1628] mb-8 tracking-tight">Latest Stories</h3>
            
            <div 
              className="relative w-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            >
              <div 
                ref={scrollRef}
                className={`flex gap-5 overflow-x-auto no-scrollbar pb-2 pr-12 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
              >
                {stories.map((story, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0 w-[86px]">
                    {/* Story Ring */}
                    <div className="w-[86px] h-[86px] rounded-full p-[3px] bg-gradient-to-tr from-[#3590F3] via-[#62BFED] to-[#C2BBF0]">
                      <div className="w-full h-full rounded-full border-[3px] border-white overflow-hidden bg-white">
                        <img src={story.image} alt="story" className="w-full h-full object-cover pointer-events-none" draggable="false" />
                      </div>
                    </div>
                    {/* Title */}
                    <span className="text-[0.75rem] text-center text-[#1a1a1a] font-medium leading-snug whitespace-pre-line">
                      {story.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Custom scrollbar hiding CSS */}
            <style dangerouslySetInnerHTML={{__html: `
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
          </div>

          <hr className="border-gray-200" />

          {/* Stay Informed */}
          <div className="py-10 flex flex-col gap-4">
            <h3 className="text-[2.2rem] font-light text-[#0d1628] tracking-tight">Stay Informed</h3>
            <p className="text-[#1a1a1a] text-[1.05rem] leading-relaxed pr-4 font-normal">
              Be the first to know when we release new content.
            </p>
            <button className="bg-[#3590F3] text-white font-bold py-3 px-6 rounded-md w-fit mt-3 hover:bg-[#62BFED] hover:text-[#0b111e] transition-all tracking-wide shadow-md text-[1rem]">
              Subscribe
            </button>
          </div>

          <hr className="border-gray-200" />

          {/* Follow Us */}
          <div className="py-10 flex flex-col gap-8">
            <h3 className="text-[2.2rem] font-light text-[#1a1a1a] tracking-tight">Follow Us</h3>
            <div className="flex items-center gap-5">
              <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#C2BBF0] text-[#0b111e] flex items-center justify-center hover:bg-[#3590F3] hover:text-white transition-colors shadow-sm">
                <FaLinkedinIn size={22} />
              </a>
              <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#8FB8ED] text-[#0b111e] flex items-center justify-center hover:bg-[#62BFED] transition-colors shadow-sm">
                <FaFacebookF size={22} />
              </a>
              <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#62BFED] text-[#0b111e] flex items-center justify-center hover:bg-[#3590F3] hover:text-white transition-colors shadow-sm">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
