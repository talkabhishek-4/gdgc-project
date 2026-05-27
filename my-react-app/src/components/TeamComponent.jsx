import React, { useState } from 'react';

export default function TeamsComponent() {
  const [expandedDeptIndex, setExpandedDeptIndex] = useState(null);

  const departments = [
    {
      title: "Team Web & Software Development",
      count: "8  Members",
      desc: "Manages solution builds, codebase staging, and active deployment tracks during seasonal hackathons.",
      color: "text-[#4285f4]",
      bgColor: "bg-[#4285f4]/10",
      borderColor: "hover:border-[#4285f4]/40 hover:shadow-[0_8px_30px_rgb(66,133,244,0.08)]",
      glowBg: "bg-[#4285f4]/10",
      activeShadow: "shadow-[0_12px_40px_rgba(66,133,244,0.12)] border-[#4285f4]/30",
      roster: [
        { name: "Tech Lead", role: "Domain Lead", dept: "CSE", linkedin: "https://linkedin.com", tier: "lead" },
        { name: "Tech Co-Lead", role: "Domain Co-Lead", dept: "IT", linkedin: "https://linkedin.com", tier: "colead" },
        { name: "Senior Executive 1", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Executive 2", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Executive 3", role: "Senior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Junior Executive 1", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Executive 2", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Executive 3", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" }
      ]
    },
    {
      title: "Team AI & Machine Learning",
      count: "8 Members",
      desc: "Curates vector assets, visual brand ribbons, typography guides, and interactive layout systems.",
      color: "text-[#34a853]",
      bgColor: "bg-[#34a853]/10",
      borderColor: "hover:border-[#34a853]/40 hover:shadow-[0_8px_30px_rgb(52,168,83,0.08)]",
      glowBg: "bg-[#34a853]/10",
      activeShadow: "shadow-[0_12px_40px_rgba(52,168,83,0.12)] border-[#34a853]/30",
      roster: [
        { name: "Design Lead", role: "Domain Lead", dept: "CSE", linkedin: "https://linkedin.com", tier: "lead" },
        { name: "Design Co-Lead", role: "Domain Co-Lead", dept: "IT", linkedin: "https://linkedin.com", tier: "colead" },
        { name: "Senior Creative 1", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Creative 2", role: "Senior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Creative 3", role: "Senior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Junior UI Artisan 1", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior UI Artisan 2", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior UI Artisan 3", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" }
      ]
    },
    {
      title: "Team Cloud & DevOps",
      count: "8  Members",
      desc: "Handles session notes, professional report humanization, campaign announcements, and copy circles.",
      color: "text-[#fbbc05]",
      bgColor: "bg-[#fbbc05]/10",
      borderColor: "hover:border-[#fbbc05]/40 hover:shadow-[0_8px_30px_rgb(251,188,5,0.08)]",
      glowBg: "bg-[#fbbc05]/10",
      activeShadow: "shadow-[0_12px_40px_rgba(251,188,5,0.12)] border-[#fbbc05]/30",
      roster: [
        { name: "Editorial Lead", role: "Domain Lead", dept: "CSE", linkedin: "https://linkedin.com", tier: "lead" },
        { name: "Editorial Co-Lead", role: "Domain Co-Lead", dept: "ECE", linkedin: "https://linkedin.com", tier: "colead" },
        { name: "Senior Writer 1", role: "Senior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Writer 2", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Writer 3", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Junior Content Rep 1", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Content Rep 2", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Content Rep 3", role: "Junior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "junior" }
      ]
    },
    
    {
      title: "Team Cybersecurity & Ethical Hacking",
      count: "8 Members",
      desc: "Coordinates physical venue schedules, administrative portal logging, and student outreach syncs.",
      color: "text-[#ea4335]",
      bgColor: "bg-[#ea4335]/10",
      borderColor: "hover:border-[#ea4335]/40 hover:shadow-[0_8px_30px_rgb(234,67,53,0.08)]",
      glowBg: "bg-[#fbbc05]/10",
      activeShadow: "shadow-[0_12px_40px_rgba(251,188,5,0.12)] border-[#fbbc05]/30",
      roster: [
        { name: "Editorial Lead", role: "Domain Lead", dept: "CSE", linkedin: "https://linkedin.com", tier: "lead" },
        { name: "Editorial Co-Lead", role: "Domain Co-Lead", dept: "ECE", linkedin: "https://linkedin.com", tier: "colead" },
        { name: "Senior Writer 1", role: "Senior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Writer 2", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Writer 3", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Junior Content Rep 1", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Content Rep 2", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Content Rep 3", role: "Junior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "junior" }
      ]
    },
    {
      title: "Team UI/UX Design & Creative Strategy ",
      count: "8  Members",
      desc: "Coordinates physical venue schedules, administrative portal logging, and student outreach syncs.",
      color: "text-[#ea4335]",
      bgColor: "bg-[#ea4335]/10",
      borderColor: "hover:border-[#ea4335]/40 hover:shadow-[0_8px_30px_rgb(234,67,53,0.08)]",
      glowBg: "bg-[#ea4335]/10",
      activeShadow: "shadow-[0_12px_40px_rgba(234,67,53,0.12)] border-[#ea4335]/30",
      roster: [
        { name: "PR Lead", role: "Domain Lead", dept: "IT", linkedin: "https://linkedin.com", tier: "lead" },
        { name: "Operations Co-Lead", role: "Domain Co-Lead", dept: "CSE", linkedin: "https://linkedin.com", tier: "colead" },
        { name: "Senior Organizer 1", role: "Senior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Organizer 2", role: "Senior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Senior Organizer 3", role: "Senior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "senior" },
        { name: "Junior Executive 1", role: "Junior Member", dept: "CSE", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Executive 2", role: "Junior Member", dept: "IT", linkedin: "https://linkedin.com", tier: "junior" },
        { name: "Junior Executive 3", role: "Junior Member", dept: "ECE", linkedin: "https://linkedin.com", tier: "junior" }
      ]
    }
  ];

  const getTierBadgeStyles = (tier) => {
    switch (tier) {
      case 'lead': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'colead': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'senior': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  const toggleRosterPanel = (index) => {
    setExpandedDeptIndex(expandedDeptIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-10 text-left font-sans tracking-wide">
      
      {/* SECTION HEADER TRACK */}
      <div className="border-b border-gray-100 pb-5 relative">
        <h3 className="text-2xl md:text-3xl font-black text-[#0e3c92] tracking-tight uppercase">
          Specialized Sub-Committees
        </h3>
        <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">
          Operational structural branches executing core field sprint assignments.
        </p>
        <div className="absolute bottom-0 left-0 h-0.5 w-20 bg-gradient-to-r from-[#34a853] to-[#fbbc05]"></div>
      </div>
 
      <div className="flex flex-col space-y-6 w-full">
        {departments.map((dept, index) => {
          const isPanelOpen = expandedDeptIndex === index;
          return (
            <div 
              key={index}
              className={`bg-white rounded-[2.25rem] border border-gray-100 p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-500 ease-out relative overflow-hidden group ${
                isPanelOpen ? dept.activeShadow : `shadow-sm ${dept.borderColor}`
              }`}
            > 
              <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700 scale-75 group-hover:scale-110 opacity-40 group-hover:opacity-100 ${dept.glowBg}`}></div>
              <div className={`absolute -left-16 -bottom-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700 scale-75 opacity-0 ${isPanelOpen ? 'opacity-30 scale-100' : ''} ${dept.glowBg}`}></div>

           
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full relative z-10">
                <div className="space-y-2.5 max-w-2xl">
                  <div className={`px-3 py-1 rounded-full ${dept.bgColor} ${dept.color} text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 transform group-hover:translate-x-1 transition-transform duration-300`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${dept.color.replace('text', 'bg')} animate-pulse`}></span>
                    {dept.count}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-[#446e6c] tracking-tight transition-colors group-hover:text-gray-900">{dept.title}</h4>
                  <p className="text-xs md:text-sm text-[#5f6368] leading-relaxed font-normal">{dept.desc}</p>
                </div>
 
                <button
                  onClick={() => toggleRosterPanel(index)}
                  className={`px-6 py-3.5 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 select-none min-w-[180px] cursor-pointer shadow-2xs group/btn active:scale-98 ${
                    isPanelOpen 
                      ? 'bg-[#202124] text-white border-transparent shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300/80'
                  }`}
                >
                  <span>{isPanelOpen ? 'Collapse Roster' : 'View Team Roster'}</span>
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-500 ease-out ${isPanelOpen ? 'rotate-180 text-white' : 'text-gray-400 group-hover/btn:translate-y-0.5'}`} 
                    fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
 
              <div 
                className={`transition-all duration-500 ease-in-out relative z-10 ${
                  isPanelOpen ? 'max-h-[1400px] opacity-100 invisible visible mt-2' : 'max-h-0 opacity-0 invisible overflow-hidden pointer-events-none'
                }`}
              >
                <div className="w-full h-px bg-gray-100/70 mb-6"></div>
                 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                  {dept.roster.map((member, mIdx) => (
                    <div 
                      key={mIdx}
                      className={`bg-white rounded-2xl border border-gray-100/80 shadow-2xs p-5 flex flex-col items-center justify-between text-center min-h-[190px] transition-all duration-500 group/member transform ${
                        isPanelOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
                      } hover:border-gray-200 hover:shadow-md hover:-translate-y-1`}
                      style={{ transitionDelay: `${mIdx * 40}ms` }}
                    >
                      <div className="space-y-3 w-full"> 
                        <div className="w-10 h-10 rounded-full bg-gray-50/50 flex items-center justify-center text-sm border border-gray-100 mx-auto text-gray-400 font-bold select-none relative group-hover/member:scale-105 transition-transform duration-300">
                          👤
                          <div className={`absolute -inset-0.5 rounded-full border border-dashed opacity-0 group-hover/member:opacity-100 group-hover/member:animate-spin duration-1000 text-gray-300`}></div>
                        </div>
                        <div className="w-full space-y-0.5">
                          <h5 className="text-sm font-bold text-[#202124] group-hover/member:text-blue-600 transition-colors duration-200 truncate px-1">
                            {member.name}
                          </h5>
                          <span className={`inline-block text-[10px] font-bold border rounded-full px-2.5 py-0.5 uppercase tracking-wide ${getTierBadgeStyles(member.tier)}`}>
                            {member.role}
                          </span>
                        </div>
                      </div>
 
                      <div className="w-full flex items-center justify-between pt-2.5 border-t border-gray-100 mt-4">
                        <span className="bg-gray-50 text-gray-400 border border-gray-200/50 rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-wider truncate max-w-[110px]" title={member.dept}>
                          {member.dept}
                        </span>
                        
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-[#0a66c2] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 scale-95 hover:scale-105 shadow-2xs hover:shadow-sm"
                          title={`Connect via LinkedIn`}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}