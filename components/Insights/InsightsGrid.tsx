"use client";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const dummyInsights = [
  { title: "Medical Device Product Development Phases: From Concept to Market", date: "November 2023", image: "/medical_device_cart.jpg" },
  { title: "Medical Device Compliance: What It Takes to Get to Market", date: "September 2023", image: "/team_1.jpg" },
  { title: "MedHawk Turns 20: The Milestones That Shaped Our Story", date: "September 2023", image: "/about_founder.jpg" },
  { title: "AI in Medical Device Development: How We Use It Without Breaking ISO 13485 Quality Management System", date: "July 2023", image: "/team_2.jpg" },
  { title: "[Webinar] Build Medical Devices That Actually Reach Your Users", date: "May 2023", image: "/team_3.jpg" },
  { title: "MedHawk Becomes an Expert Partner at Centech", date: "April 2023", image: "/about_glass_office.jpg" },
  { title: "MedHawk Renews its ISO 13485 Certificate for Medical Device Development", date: "March 2023", image: "/mri_scanner_blue.jpg" },
  { title: "MedHawk is Back at LSI (LSI '24)", date: "February 2023", image: "/team_4.jpg" },
  { title: "February 2023 Community Meetup", date: "February 2023", image: "/about_green_office.jpg" },
  { title: "2023 MedTech Market Insights: 4 Best Practices to Align Your Product Development Strategy", date: "January 2023", image: "/health_app_ui.jpg" },
  { title: "Medical Device Software Development (2024 Guide)", date: "December 2023", image: "/team_5.jpg" },
  { title: "2023 Wrap-Up: A Look Back at The Year", date: "December 2022", image: "/culture_cycling.jpg" },
];

export default function InsightsGrid() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 pb-20 bg-transparent flex flex-col items-center">
      
      {/* Grid */}
      <div className="w-full max-w-[70rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyInsights.map((insight, idx) => (
          <div key={idx} className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col h-[350px] cursor-pointer group shadow-lg border border-[#C2BBF0]/30 hover:border-[#3590F3]/60 transition-all duration-300 hover:-translate-y-1">
             <div className="w-full h-[180px] relative bg-gray-200 overflow-hidden">
                <Image src={insight.image} alt={insight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
             </div>
             <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <h4 className="text-[#1A1A1A] font-medium text-[15px] leading-snug group-hover:text-[#3590F3] transition-colors">{insight.title}</h4>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-gray-500 text-[10px] font-bold tracking-wider uppercase">{insight.date}</span>
                  <FiArrowUpRight className="text-black text-xl group-hover:text-[#3590F3] transition-colors" />
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex gap-6 text-[#888888] font-medium text-[15px]">
         {[1,2,3,4,5,6,7,8].map(num => (
           <span key={num} className={`cursor-pointer hover:text-[#3590F3] transition-colors ${num === 1 ? 'text-[#3590F3] font-bold' : ''}`}>
             {num}
           </span>
         ))}
      </div>

    </section>
  );
}
