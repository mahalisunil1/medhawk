import React from 'react';
import Image from 'next/image';

export default function ServicesBanner() {
  return (
    <section className="bg-transparent pb-20 pt-4 px-6 md:px-10 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
        <Image 
          src="/design_sketches_banner.jpg" 
          alt="Product Design Sketches and Prototypes" 
          fill 
          className="object-cover"
        />
      </div>
    </section>
  );
}
