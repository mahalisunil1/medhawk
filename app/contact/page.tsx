import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Contact Us | MedHawk',
  description: 'Let\'s talk about your project',
};

export default function ContactPage() {
  const inputClasses = "w-full bg-[#101728] border border-white/10 rounded-md p-4 text-white placeholder-white/40 focus:outline-none focus:border-[#3590F3] transition-colors mt-2 text-[1rem]";
  const labelClasses = "text-white/90 text-[0.95rem]";
  const star = <span className="text-[#62BFED]">*</span>;

  return (
    <main className="bg-medhawk-dark text-white min-h-screen px-[5%] py-20 lg:py-28 flex flex-col gap-16 lg:gap-20 relative overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 max-w-[1400px] mx-auto w-full">
        
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-white">
              Let&apos;s talk about<br/>your project
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] text-white/90 leading-relaxed max-w-[500px]">
              We&apos;d love to hear from you! Whether you have a project in mind or just want to explore what&apos;s possible, our team is here and ready to connect.
            </p>
          </div>

          <div className="bg-[#FAF8FD] text-[#1a1a1a] border border-[#C2BBF0]/30 rounded-[2rem] p-10 lg:p-12 max-w-[600px] flex flex-col gap-8 shadow-2xl relative overflow-hidden">
            {/* Avatars */}
            <div className="flex -space-x-4">
              {/* Using Unsplash for realistic placeholder avatars */}
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Expert 1" className="w-14 h-14 rounded-full border-2 border-[#FAF8FD] object-cover" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Expert 2" className="w-14 h-14 rounded-full border-2 border-[#FAF8FD] object-cover" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Expert 3" className="w-14 h-14 rounded-full border-2 border-[#FAF8FD] object-cover" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" alt="Expert 4" className="w-14 h-14 rounded-full border-2 border-[#FAF8FD] object-cover" />
            </div>
            
            <h3 className="text-[1.8rem] md:text-[2.1rem] leading-[1.2] font-normal tracking-tight text-[#0d1628]">
              Get a free, 45-minute consultation with our industry-leading experts.
            </h3>
            
            <p className="text-[#333333] text-[1.05rem] leading-relaxed max-w-[90%]">
              Our experts will answer your questions and guide you through every stage of your product development journey.
            </p>
            
            <button className="bg-[#3590F3] hover:bg-[#62BFED] text-white hover:text-[#0b111e] font-semibold py-4 px-8 rounded-lg w-fit flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 mt-2 shadow-md cursor-pointer">
              Book consultation <FiArrowRight className="text-lg" />
            </button>
          </div>

          <div className="flex items-baseline gap-4 mt-8">
            <h4 className="text-[2.2rem] font-light tracking-tight">Call Us</h4>
            <p className="text-[2.2rem] font-semibold tracking-tight text-[#62BFED]">+1 866-727-4139</p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col gap-6 w-full max-w-[650px] lg:ml-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>First Name {star}</label>
              <input type="text" placeholder="Your First Name" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Last Name {star}</label>
              <input type="text" placeholder="Your Last Name" className={inputClasses} />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Company {star}</label>
            <input type="text" placeholder="Your Company Name" className={inputClasses} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Email Address {star}</label>
              <input type="email" placeholder="Your Email Address*" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Phone</label>
              <input type="tel" placeholder="Your Phone Number" className={inputClasses} />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Location {star}</label>
            <select defaultValue="" className={`${inputClasses} appearance-none cursor-pointer text-white/40 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.75rem]`}>
              <option value="" disabled>Select your country</option>
              <option value="us" className="text-black">United States</option>
              <option value="ca" className="text-black">Canada</option>
              <option value="uk" className="text-black">United Kingdom</option>
            </select>
          </div>

          <div>
            <label className={labelClasses}>What is Your Inquiry About? {star}</label>
            <select defaultValue="" className={`${inputClasses} appearance-none cursor-pointer text-white/40 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.75rem]`}>
              <option value="" disabled>Select a subject for your inquiry</option>
              <option value="development" className="text-black">Product Development</option>
              <option value="consulting" className="text-black">Consulting</option>
              <option value="other" className="text-black">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClasses}>Message {star}</label>
            <textarea 
              rows={5} 
              placeholder="Let us know the specifics of your request to better serve you. If your request is for a proposal, please provide as much details as possible.*" 
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="flex items-start gap-4 mt-2">
            <input 
              type="checkbox" 
              id="newsletter" 
              className="mt-1.5 w-6 h-6 rounded-full border-2 border-white/50 bg-transparent appearance-none cursor-pointer checked:bg-[#3590F3] checked:border-[#3590F3] transition-colors relative after:content-[''] after:absolute after:hidden checked:after:block after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-white after:rounded-full" 
            />
            <label htmlFor="newsletter" className="text-white/80 text-[0.95rem] leading-relaxed cursor-pointer select-none">
              Stay informed about MedHawk&apos;s expertise, new projects and our unique company culture.
            </label>
          </div>

          <button className="w-full bg-[#3590F3] hover:bg-[#62BFED] active:scale-[0.98] transition-all duration-200 text-white hover:text-[#0b111e] font-bold text-lg py-4 rounded-lg mt-6 shadow-xl cursor-pointer">
            Send Message
          </button>
        </div>
      </div>

      {/* Spaces Section */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-10 relative z-10 mt-10">
        <h2 className="text-[2.2rem] font-light tracking-tight">Our spaces</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: MedHawk HQ */}
          <div className="border border-white/20 rounded-[1.5rem] p-8 flex flex-col gap-6 transition-colors hover:border-[#62BFED]/50 hover:bg-white/5 group">
            <div className="overflow-hidden rounded-[1rem]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                alt="MedHawk HQ" 
                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.5rem] font-medium tracking-tight">MedHawk HQ</h3>
              <p className="text-white/80 text-[0.95rem] whitespace-pre-line leading-relaxed">
                1505 rue Royale{"\n"}
                Trois-Rivières (Québec),{"\n"}
                Canada G9A 4J9
              </p>
            </div>
            <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-3 px-6 rounded-md w-fit text-[0.85rem] flex items-center gap-2 transition-colors mt-auto cursor-pointer">
              View on Map <FiArrowRight />
            </button>
          </div>

          {/* Card 2: MedHawk Montréal */}
          <div className="border border-white/20 rounded-[1.5rem] p-8 flex flex-col gap-6 transition-colors hover:border-[#62BFED]/50 hover:bg-white/5 group">
            <div className="overflow-hidden rounded-[1rem]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                alt="MedHawk Montréal" 
                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.5rem] font-medium tracking-tight">MedHawk Montréal</h3>
              <p className="text-white/80 text-[0.95rem] whitespace-pre-line leading-relaxed">
                55 rue de Louvain Ouest, Suite 350-1,{"\n"}
                Montréal (Québec),{"\n"}
                Canada H2N 1A4
              </p>
            </div>
            <button className="bg-[#62BFED] hover:bg-[#8FB8ED] text-[#0b111e] font-semibold py-3 px-6 rounded-md w-fit text-[0.85rem] flex items-center gap-2 transition-colors mt-auto cursor-pointer">
              View on Map <FiArrowRight />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
