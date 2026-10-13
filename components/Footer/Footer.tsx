"use client";

import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      className="relative pt-20 pb-10 px-[5%] text-white overflow-hidden border-t border-white/5"
      style={{
        background: 'radial-gradient(circle at 0% 50%, #15223c 0%, #0c1424 40%, #070c16 100%)'
      }}
    >
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Newsletter Box */}
        <div className="border border-[#C2BBF0]/25 rounded-[1.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.2rem] md:text-[1.3rem] font-bold tracking-wide">
              Get exclusive content made and curated by experts
            </h3>
            <p className="text-[0.95rem] text-white/70">
              Subscribe to receive our news and insights in your inbox.
            </p>
          </div>
          <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-bold py-3 px-8 rounded-lg whitespace-nowrap shadow-md transition-all cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">Services</h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Medical Device Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Product Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Enhancement & Program Acceleration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality, Risk & Regulatory</a></li>
            </ul>
          </div>

          {/* Column 2: Expertise */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">Expertise</h4>
            <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Human Factors Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Experience & User Interface Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mechanical Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronic Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Embedded Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Column 3: Work & Insights */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">Work</h4>
              <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Explore our Portfolio</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">Insights</h4>
              <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content Hub & Downloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Development Support</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: About Us & Let's Talk */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">About Us</h4>
              <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">We are MedHawk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Culture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology & Approach</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.05rem] font-semibold text-white/90 mb-2">Let&apos;s Talk</h4>
              <ul className="flex flex-col gap-3 text-[0.9rem] text-white/70 mb-2">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              </ul>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-[#C2BBF0] text-[#0b111e] flex items-center justify-center hover:bg-[#3590F3] hover:text-white transition-colors shadow-sm">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#8FB8ED] text-[#0b111e] flex items-center justify-center hover:bg-[#62BFED] transition-colors shadow-sm">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#62BFED] text-[#0b111e] flex items-center justify-center hover:bg-[#3590F3] hover:text-white transition-colors shadow-sm">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Badges Section */}
        <div className="py-8 border-y border-white/10 flex flex-wrap items-center justify-between gap-8 opacity-80">
          
          {/* BSI Badge Mock */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 border border-white rounded-full flex items-center justify-center">
              <span className="font-bold text-lg leading-none tracking-tighter">bsi</span>
            </div>
            <div className="flex flex-col text-[0.6rem] uppercase tracking-wider leading-tight">
              <span>ISO 13485</span>
              <span>Quality Management</span>
              <span>Medical Devices</span>
              <span className="font-bold mt-1">CERTIFIED</span>
            </div>
          </div>

          {/* Clutch Badge */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 border border-white rounded-lg flex items-center justify-center rotate-45">
              <div className="-rotate-45 font-bold text-[0.7rem] text-center leading-tight">Clutch<br/><span className="text-[0.45rem] font-normal">TOP<br/>RATED</span></div>
            </div>
          </div>

          {/* Greenlight Guru */}
          <div className="flex items-center gap-3">
             <div className="w-8 h-10 border border-white flex flex-col items-center justify-center text-[0.5rem] font-bold">
               TOP<br/><span className="text-sm">5</span>
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-[1rem] leading-none">greenlight guru</span>
               <span className="text-[0.55rem] uppercase tracking-wide mt-1 text-white/70">Top 5 Medical Device<br/>Product Design Companies</span>
             </div>
          </div>

          {/* Grands Prix */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center text-[0.6rem] font-bold">GP</div>
            <div className="flex flex-col text-[0.6rem] leading-tight font-bold">
              <span>GRANDS PRIX</span>
              <span>DU DESIGN</span>
              <span className="font-normal text-white/70 mt-1">Platinum Award</span>
            </div>
          </div>

          {/* GoodFirms */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[1.2rem] tracking-tight">GoodFirms</span>
            <div className="bg-[#62BFED] text-[#0b111e] text-[0.5rem] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1">
              Verified
            </div>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[0.85rem] text-white/60 pb-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>© 2026 MedHawk - All Rights Reserved.</span>
            <span>Made with ❤️ by MedHawk.</span>
            <a href="#" className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all">
              Privacy Policy
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-white rounded-t-lg rounded-bl-lg"></div>
            <div className="flex flex-col leading-tight font-medium text-white/90">
              <span className="text-[1rem]">Achieving</span>
              <span className="text-[1rem]">Together</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
