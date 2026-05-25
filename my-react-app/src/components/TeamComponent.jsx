import React from 'react';

export default function TeamsComponent() {
  const departments = [
    { title: "Technical Domain", count: "12 Members", desc: "Manages solution builds, codebase staging, and active deployment tracks during seasonal hackathons.", color: "text-[#4285f4]", bg: "bg-blue-50/50" },
    { title: "Design & UX Strategy", count: "6 Members", desc: "Curates vector assets, visual brand ribbons, typography guides, and interactive layout systems.", color: "text-[#34a853]", bg: "bg-emerald-50/50" },
    { title: "Editorial & Content", count: "5 Members", desc: "Handles session notes, professional report humanization, campaign announcements, and copy circles.", color: "text-[#fbbc05]", bg: "bg-amber-50/50" },
    { title: "Operations & PR", count: "8 Members", desc: "Coordinates physical venue schedules, administrative portal logging, and student outreach syncs.", color: "text-[#ea4335]", bg: "bg-red-50/50" }
  ];

  return (
    <div className="w-full space-y-8 text-left">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-2xl font-black text-[#202124] uppercase tracking-tight">
          Specialized Sub-Committees
        </h3>
        <p className="text-xs text-gray-400 font-medium">Operational branches executing domain sprints.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {departments.map((dept, index) => (
          <div 
            key={index}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 flex flex-col justify-between space-y-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="space-y-2">
              <div className={`px-2.5 py-1 rounded-lg ${dept.bg} ${dept.color} text-xs font-bold uppercase tracking-wider inline-block`}>
                {dept.count}
              </div>
              <h4 className="text-lg font-bold text-[#202124] tracking-tight pt-1">{dept.title}</h4>
              <p className="text-xs text-[#5f6368] leading-relaxed font-normal">{dept.desc}</p>
            </div>
            <div className="w-full h-px bg-gray-100/80 pt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}