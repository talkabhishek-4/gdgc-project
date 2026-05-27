import React from 'react';

import CoreMembers from '../components/CoreMembers';

import TeamsComponent from '../components/TeamComponent'; 

export default function TeamPage() {
  return (
    <section className="w-full bg-[#f8fafd] pt-4 pb-16 md:pb-24 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-8 pb-4 group/header relative select-none animate-[fadeIn_0.6s_ease-out]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-blue-400/5 rounded-full blur-3xl pointer-events-none transform group-hover/header:scale-125 transition-transform duration-700"></div>

          <div className="inline-flex items-center gap-2 bg-blue-50/60 border border-blue-100/30 px-3 py-1.5 rounded-full shadow-2xs transform group-hover/header:-translate-y-0.5 transition-all duration-300">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              Our Ecosystem
            </span>
          </div>

          {/* Cinematic Typography Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#202124] tracking-tight leading-none">
            Meet the <span className="bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#fbbc05] bg-clip-text text-transparent group-hover/header:saturate-150 transition-all duration-500">Core Team</span>
          </h2>

          {/* Dynamic Expanding Accent Line */}
          <div className="relative w-16 h-1 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#34a853] mx-auto rounded-full shadow-2xs transition-all duration-500 ease-out group-hover/header:w-36"></div>

          {/* Description Paragraph */}
          <p className="text-xs md:text-sm text-[#5f6368] leading-relaxed max-w-xl mx-auto pt-1 font-medium transition-colors group-hover/header:text-gray-600 duration-300">
            The student executives, developers, and designers driving tech literacy 
            and campaign milestones across the GGV campus ecosystem.
          </p>
        </div>

        {/* ================= STRUCTURAL CORE SUB-COMPONENTS ================= */}
        <CoreMembers />
        <TeamsComponent />

      </div> 
    </section>
  );
}