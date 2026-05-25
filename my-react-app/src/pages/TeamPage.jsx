import React from 'react';
import CoreMembers from '../components/CoreMembers';
import TeamsComponent from '../components/TeamComponent';

export default function TeamPage() {
  return (
    <section className="w-full bg-[#f8fafd] pt-4 pb-16 md:pb-24 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-6">
          <span className="text-xs font-bold text-[#4285f4] bg-blue-50 px-3 py-1.5 rounded-md uppercase tracking-widest inline-block">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#202124] tracking-tight">
            Meet the Core Team
          </h2>
          <div className="w-12 h-1 bg-[#34a853] mx-auto rounded-full"></div>
          <p className="text-sm text-[#5f6368] leading-relaxed">
            The student executives, developers, and designers driving tech literacy and campaign milestones across the GGV campus ecosystem.
          </p>
        </div>

        {/* STRUCTURAL COMPONENTS */}
        <CoreMembers />
        <TeamsComponent />

      </div>
    </section>
  );
}