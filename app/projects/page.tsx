import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Projects | MedHawk',
  description: 'Projects & Case Studies',
};

const projectsData = [
  {
    title: "Console for Calcified Artery Disease Treatment",
    type: "Case Study",
    desc: "We have collaborated with SoundBite Medical to design and develop the latest commercial version of their console.",
    tag: "Medtech",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Revolutionary Oncology Medical Device to Treat Cancer",
    type: "Project Preview",
    badge: "NEW",
    desc: "Our largest project yet. We designed and engineered the Polartrak, a proprietary and revolutionary medical device developed by Starpax Biopharma to treat cancer.",
    tag: "Medtech",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Veterinary Anesthesia Ventilator",
    type: "Case Study",
    badge: "NEW",
    desc: "Design and Engineering of an anesthesia ventilator with a sleek appearance and cutting-edge technology for veterinary clinics.",
    tag: "Veterinary",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Osmolarity Test Device for Dry Eyes",
    type: "Case Study",
    desc: "We improved the design of a dry eye detection device, while supporting I-MED in its product manufacturing.",
    tag: "Healthcare",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mobile App for Smart Homes",
    type: "Case Study",
    desc: "We redesigned the ChromaComfort mobile app to ensure it aligns more effectively with the needs and expectations of its users.",
    tag: "Consumer",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Automated Grader for Sawmills",
    type: "Case Study",
    desc: "We redesigned and developed an automated grader for sawmills, enhancing the performance of a proven technology.",
    tag: "Industrial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Medical Software for Cognitive Decline",
    type: "Case Study",
    desc: "We have designed and developed innovative medical software that helps detect and understand memory loss.",
    tag: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Medical Device for Oxygen Therapy",
    type: "Case Study",
    desc: "We supported OxyNov in developing the FreeO2, a medical device that allows hospitals to administer oxygen safely and accurately to their patients.",
    tag: "Medtech",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-medhawk-dark min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Hero Image with dark overlay */}
      <div className="absolute top-0 left-0 right-0 h-[600px] z-[0]">
        <img 
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop" 
          alt="Laboratory" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b111e]/70 via-[#0b111e]/90 to-[#0b111e]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-[5%] flex flex-col items-center text-center text-white">
        <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-normal tracking-tight mb-6 leading-tight">
          Projects & Case Studies
        </h1>
        <p className="text-[1.1rem] md:text-[1.2rem] text-white/90">
          Discover the Innovations We&apos;ve Brought to Life.
        </p>
      </section>

      {/* Grid Section */}
      <section className="relative z-10 px-[5%] pb-32 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col group cursor-pointer shadow-xl transition-transform duration-500 hover:-translate-y-2 border border-[#C2BBF0]/30"
            >
              {/* Image Container */}
              <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* NEW Badge */}
                {project.badge && (
                  <div className="absolute top-6 right-6 bg-[#3590F3] text-white text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Text Content Container */}
              <div className="p-8 pt-10 md:p-10 md:pt-12 flex flex-col flex-grow bg-white relative">
                
                {/* Case Study / Project Preview Floating Badge */}
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#C2BBF0] text-[#0b111e] text-[0.85rem] font-bold px-5 py-2.5 rounded-full shadow-lg z-10 tracking-wide">
                  {project.type}
                </div>

                <h2 className="text-[1.6rem] md:text-[1.8rem] text-black font-normal leading-[1.2] tracking-tight mb-4 group-hover:text-[#3590F3] transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-[#333333] text-[1rem] leading-relaxed flex-grow">
                  {project.desc}
                </p>
                
                {/* Footer of Card */}
                <div className="flex justify-between items-center mt-8 pt-2">
                  <div className="border border-[#C2BBF0]/50 rounded-md flex overflow-hidden">
                    <div className="w-2 bg-[#3590F3] self-stretch"></div>
                    <span className="text-[#18181B] px-3 py-1.5 text-[0.8rem] font-semibold tracking-wide bg-[#FAF8FD]">
                      {project.tag}
                    </span>
                  </div>
                  <FiArrowRight className="text-2xl text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#3590F3]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
