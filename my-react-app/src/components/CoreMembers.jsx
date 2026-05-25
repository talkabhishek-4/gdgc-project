import React from 'react';

export default function CoreMembers() {
  const executives = [
    { name: "Abhishek Jaiswal", role: "UI/UX Executive & Frontend Lead", track: "Design/Web", border: "border-t-[#4285f4]" },
    { name: "Core Executive 2", role: "Community Organizer & Cloud Lead", track: "Cloud Infrastructure", border: "border-t-[#34a853]" },
    { name: "Core Executive 3", role: "Machine Learning Lead & Systems Architect", track: "AI/ML Track", border: "border-t-[#ea4335]" }
  ];

  return (
    <div className="w-full space-y-8 text-left">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-2xl font-black text-[#202124] uppercase tracking-tight">
          Executive Leadership
        </h3>
        <p className="text-xs text-gray-400 font-medium">Primary community strategic directors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {executives.map((member, index) => (
          <div 
            key={index}
            className={`bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-8 ${member.border} relative overflow-hidden`}
          >
            {/* Profile Avatar Frame Box */}
            <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl font-bold shadow-inner text-gray-400 select-none">
              👤
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#202124] tracking-tight">{member.name}</h4>
              <p className="text-xs font-semibold text-[#4285f4] mt-0.5">{member.role}</p>
              <span className="inline-block bg-gray-50 text-gray-400 border border-gray-200/60 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mt-3">
                {member.track}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}