import React from 'react';
import eventsHeroPoster from '../assets/eventHero.png'; 

export default function EventsHeader() {
  return (
    <div className="w-full space-y-12"> 
      <div className="w-full h-80 md:h-[440px] rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden bg-gray-50 relative">
        <img 
          src={eventsHeroPoster} 
          alt="GDGC GGV Events Community Hero Poster" 
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-sm font-bold text-gray-400">Events Hub Hero Poster Banner</div>');
          }}
        />
      </div>
 
      <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
        <span className="text-sm font-bold uppercase tracking-widest text-[#ea4335] bg-[#ea4335]/10 px-3 py-1.5 rounded-md inline-block">
          OUR EVENTS
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#202124] tracking-tight mt-3 mb-4">
          Explore & Connect
        </h2>
        <div className="w-16 h-1 bg-[#4285f4] mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-[#5f6368] leading-relaxed">
          Join our interactive sessions, hackathons, and speaker workshops to sharpen your 
          technical stack and design real solutions alongside peer innovators.
        </p>
      </div>

    </div>
  );
}