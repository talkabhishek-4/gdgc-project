import React from 'react';

export default function CoreMembers() {
  const executives = [
    { 
      name: "Isant Yadav", 
      role: "Lead", 
      dept: "Computer Science & Engineering", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-blue-400/10",
      borderColor: "group-hover:border-[#4285f4]",
      border: "border-t-[#4285f4]" 
    },
    { 
      name: "Divyanshu", 
      role: "Co-Lead", 
      dept: "Information Technology", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-green-400/10",
      borderColor: "group-hover:border-[#34a853]",
      border: "border-t-[#34a853]" 
    },
    { 
      name: "Core Member 3", 
      role: "marketing & outreach lead", 
      dept: "Computer Science & Engineering", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-red-400/10",
      borderColor: "group-hover:border-[#ea4335]",
      border: "border-t-[#ea4335]" 
    },
    { 
      name: "Core Member 4", 
      role: "Cloud Track Executive", 
      dept: "Computer Science & Engineering", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-yellow-400/10",
      borderColor: "group-hover:border-[#fbbc05]",
      border: "border-t-[#fbbc05]" 
    },
    { 
      name: "Core Member 5", 
      role: "AI/ML Track Executive", 
      dept: "Information Technology", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-blue-400/10",
      borderColor: "group-hover:border-[#4285f4]",
      border: "border-t-[#4285f4]" 
    },
    { 
      name: "Core Member 6", 
      role: "Web Track Executive", 
      dept: "Computer Science & Engineering", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-green-400/10",
      borderColor: "group-hover:border-[#34a853]",
      border: "border-t-[#34a853]" 
    },
    { 
      name: "Core Member 7", 
      role: "Content Strategy Lead", 
      dept: "Computer Science & Engineering", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-red-400/10",
      borderColor: "group-hover:border-[#ea4335]",
      border: "border-t-[#ea4335]" 
    },
    { 
      name: "Core Member 8", 
      role: "Graphics Design Lead", 
      dept: "Information Technology", 
      linkedin: "https://linkedin.com",
      glowBg: "bg-yellow-400/10",
      borderColor: "group-hover:border-[#fbbc05]",
      border: "border-t-[#fbbc05]" 
    },
    
  ];

  return (
    <div className="w-full space-y-10 text-left font-sans tracking-wide">
      
      {/* SECTION HEADER TRACK */}
      <div className="border-b border-gray-100 pb-5 relative">
        <h3 className="text-2xl md:text-3xl font-black text-[#202124] tracking-tight flex items-center gap-2">
          Executive Leadership
        </h3>
        <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">
          Primary community strategic directors steering tech execution tracks.
        </p>
        <div className="absolute bottom-0 left-0 h-0.5 w-20 bg-gradient-to-r from-[#4285f4] to-[#ea4335]"></div>
      </div>

      {/* CORE GRID ENGINE CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {executives.map((member, index) => (
          <div 
            key={index}
            className={`bg-white rounded-[2rem] border border-gray-100/80 shadow-sm p-6 flex flex-col items-center text-center justify-between min-h-[330px] group hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1.5 transition-all duration-500 border-t-8 ${member.border} ${member.borderColor} relative overflow-hidden`}
          >
            {/* Ambient Background Aura Blob Layer */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${member.glowBg}`}></div>
            <div className={`absolute -left-10 -bottom-10 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${member.glowBg}`}></div>

            {/* Upper Profile Context Area */}
            <div className="w-full flex flex-col items-center space-y-4 relative z-10">
              
              {/* Profile Avatar Outer Animated Ring */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-full group-hover:scale-110 group-hover:rotate-180 transition-transform duration-700"></div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-gray-50 to-white border border-gray-100/70 flex items-center justify-center text-3xl shadow-inner text-gray-400 select-none relative z-10 transform group-hover:rotate-6 transition-all duration-500">
                  👤
                </div>
              </div>

              {/* Text Matrix Block */}
              <div className="space-y-1 w-full">
                <h4 className="text-base md:text-lg font-bold text-[#202124] tracking-tight group-hover:text-blue-600 transition-colors duration-300 truncate px-1">
                  {member.name}
                </h4>
                <p className="text-xs font-bold text-[#4285f4] tracking-wide uppercase bg-blue-50/50 px-2.5 py-0.5 rounded-full inline-block">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Bottom Details & Social Connections Bar */}
            <div className="w-full flex flex-col items-center mt-6 pt-4 border-t border-gray-100 relative z-10 space-y-4">
              
              {/* Department Meta pill badge */}
              <span className="inline-block bg-gray-50/80 text-gray-500 border border-gray-200/50 group-hover:border-gray-300 rounded-xl px-3 py-1 text-[10px] font-bold uppercase tracking-wider max-w-full truncate shadow-2xs transition-colors" title={member.dept}>
                {member.dept}
              </span>

              {/* LinkedIn Brand Anchor Action Component */}
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50/70 hover:bg-[#0a66c2] text-gray-400 hover:text-white border border-gray-200/60 hover:border-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md hover:shadow-blue-200"
                title={`Connect with ${member.name} on LinkedIn`}
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}