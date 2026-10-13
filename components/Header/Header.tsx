"use client";

import React, { useState } from 'react';
import { FiArrowDown, FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import MenuDrawer from './MenuDrawer';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Medical Device Development', href: '#' },
      { label: 'New Product Development', href: '#' },
      { label: 'Product Enhancement & Program Acceleration', href: '#' },
      { label: 'Quality, Risk & Regulatory Management', href: '#' },
      { label: 'Manufacturing Support', href: '#' },
    ]
  },
  {
    label: 'Expertise',
    href: '/expertise',
    dropdown: [
      { label: 'Human Factors Engineering', href: '#' },
      { label: 'User Experience & User Interface Design', href: '#' },
      { label: 'Industrial Design', href: '#' },
      { label: 'Mechanical Engineering', href: '#' },
      { label: 'Electronic Engineering', href: '#' },
      { label: 'Software Development', href: '#' },
      { label: 'Embedded Software Development', href: '#' },
      { label: 'Quality Assurance', href: '#' },
    ]
  },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'We are MedHawk', href: '#' },
      { label: 'Culture', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Careers', href: '#', badge: 'Hiring!' },
    ]
  },
  {
    label: 'Insights',
    href: '/insights',
    dropdown: [
      { label: 'Blog', href: '#', badge: '1 NEW POST' },
      { label: 'Downloads & Ebooks', href: '#' },
      { label: '1:1 Expert Consultation', href: '#' },
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header id="main-header" className="bg-[#0b111e] lg:bg-[var(--dark-color)] text-white px-6 md:px-10 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-[100] transition-[padding] border-b border-white/5">
        <Link href="/" className="text-3xl font-bold tracking-tight flex items-center hover:opacity-80 transition-opacity">
          medhawk
        </Link>
        
        {/* Nav with group for the blunt effect */}
        <nav className="hidden lg:flex gap-8 items-center group/nav h-full">
          {navItems.map((item, idx) => (
            <div key={idx} className="group/item relative h-full flex items-center py-2">
              <Link 
                href={item.href} 
                className="text-[1.05rem] font-normal flex items-center gap-1 cursor-pointer transition-opacity duration-300 text-white group-hover/nav:opacity-40 hover:!opacity-100"
              >
                {item.label}
                {item.dropdown && (
                  <FiArrowDown className="text-xs transition-transform duration-300 group-hover/item:-rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 invisible group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:visible transition-all duration-300 z-50">
                  <div className="bg-[#FAF8FD] rounded-[1.5rem] p-7 flex flex-col gap-4 min-w-[320px] shadow-2xl border border-[#C2BBF0]/30">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link 
                        key={subIdx} 
                        href={subItem.href}
                        className="text-[0.95rem] font-normal !text-[#18181B] hover:!text-[#3590F3] transition-colors flex items-center gap-3 leading-snug"
                      >
                        {subItem.label}
                        {subItem.badge && (
                          <span className="bg-[#C2BBF0] !text-[#0b111e] text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0">
                            {subItem.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact" className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] px-6 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 shadow-md">
            Contact Us <FiArrowRight />
          </Link>
          
          <div 
            className="text-3xl cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu Button (Exact Match for Screenshot 1) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity cursor-pointer font-medium"
            aria-label="Open mobile menu"
          >
            <span className="text-[1.1rem] font-semibold tracking-tight">Menu</span>
            <div className="flex flex-col gap-[5px] w-6 justify-center items-end py-1">
              <span className="w-6 h-[2px] bg-white rounded-full"></span>
              <span className="w-4 h-[2px] bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Slide-out Menu Drawer */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
