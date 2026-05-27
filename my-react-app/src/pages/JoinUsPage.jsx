import React, { useState } from 'react';
import joinHeroImg from '../assets/hero.png'; 
import joinformbg from '../assets/joinform.png';

export default function JoinUsPage() {
  const [studentData, setStudentData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    collegeRoll: '',
    academicSemester: '4th Semester',
    primaryTrack: 'Web Development',
    githubLink: '',
    resumeFile: null
  });

  const handleInput = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setStudentData({ ...studentData, resumeFile: e.target.files[0] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Logged! Welcome to the family, ${studentData.fullName}. The core executive team will reach out to your university mail loop shortly.`);
    setStudentData({ 
      fullName: '', emailAddress: '', phoneNumber: '', collegeRoll: '', 
      academicSemester: '4th Semester', primaryTrack: 'Web Development', 
      githubLink: '', resumeFile: null 
    });
  };

  return (
    <section className="w-full bg-[#f8fafd] pt-4 pb-16 md:pb-24 font-sans tracking-wide text-left min-h-screen selection:bg-blue-100 selection:text-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="w-full bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-transparent rounded-[2.5rem] border border-blue-100/40 p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative shadow-sm group hover:shadow-md transition-all duration-500 animate-[fadeIn_0.6s_ease-out]">
           
          <div className="lg:col-span-7 space-y-4 z-10 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea4335] bg-[#ea4335]/10 px-3 py-1.5 rounded-md inline-flex items-center gap-2 animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ea4335]"></span>
              Member Onboarding
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#202124] tracking-tight leading-none">
              Join the Family Vector
            </h2>
            <div className="w-16 h-1 bg-[#4285f4] rounded-full transform origin-left group-hover:scale-x-120 transition-transform duration-500"></div>
            <p className="text-sm md:text-base text-[#5f6368] leading-relaxed max-w-xl pt-2">
              Ready to push production code, build intelligent neural networks, or shape digital interfaces? 
              Fill out your tracking credentials below to secure your community authorization ticket.
            </p>
          </div>
 
          <div className="lg:col-span-5 w-full h-[240px] md:h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-black/5 relative z-10 shadow-sm border border-white/40">
            <img 
              src={joinHeroImg} 
              alt="Join GDGC GGV Family Campaign Illustration" 
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 font-bold">GDG Community Illustration Panel</div>');
              }}
            />
          </div>
 
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none transform group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute left-1/2 -top-12 w-36 h-36 bg-green-100/30 rounded-full blur-2xl pointer-events-none transform group-hover:translate-x-4 transition-transform duration-700"></div>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full pt-4">
           
          <div className="lg:col-span-5 w-full space-y-6 lg:sticky lg:top-24 group/showcase animate-[fadeIn_0.6s_ease-out]">
            <div className="w-full h-[320px] md:h-[420px] rounded-[2.5rem] border border-gray-100 bg-white p-4 shadow-sm group-hover/showcase:shadow-md transition-all duration-500 relative overflow-hidden flex items-center justify-center">
               
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl bg-purple-500/10 pointer-events-none transform group-hover/showcase:scale-125 transition-all duration-700"></div>
              <div className="absolute -left-10 -top-10 w-44 h-44 rounded-full blur-3xl bg-blue-500/5 pointer-events-none transform group-hover/showcase:scale-125 transition-all duration-700"></div>
               
              <div className="w-full h-full rounded-[1.8rem] bg-gray-50 overflow-hidden relative border border-gray-50/50">
                <img 
                  src={joinformbg} 
                  alt="Onboarding Registration Visual Showcase" 
                  className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01] transition-all duration-700 ease-out transform group-hover/showcase:scale-103 group-hover/showcase:rotate-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 font-bold">Onboarding Visual Graphic</div>');
                  }}
                />
                 
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent opacity-80"></div>
              </div>
  
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-white/60 shadow-sm rounded-2xl p-3.5 flex items-center gap-3 transform group-hover/showcase:-translate-y-1 transition-all duration-500 max-w-xs animate-bounce-slow">
                <div className="h-9 w-9 rounded-xl bg-[#4285f4] text-white flex items-center justify-center font-bold text-lg shadow-2xs">
                  🚀
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-black text-gray-900 uppercase tracking-wider">Join GGV Track</p>
                  <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Build for the real community ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
 
          <div className="lg:col-span-7 w-full bg-white rounded-[2.5rem] border border-gray-100/80 shadow-md p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-[fadeInUp_0.8s_ease-out]">
            {/* Top Multi-Color Brand Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#34a853]"></div>

            <h3 className="text-xl font-bold text-[#202124] mb-1">Onboarding Profile</h3>
            <p className="text-xs text-gray-400 font-medium mb-6">Provide accurate university record parameters to secure authorization loop lines.</p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {/* FULL NAME */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">Your Name *</label>
                <input 
                  type="text" name="fullName" required value={studentData.fullName} onChange={handleInput} placeholder="Abhishek Jaiswal"
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">Email Address *</label>
                  <input 
                    type="email" name="emailAddress" required value={studentData.emailAddress} onChange={handleInput} placeholder="XYZ@gmail.com"
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">Contact Number *</label>
                  <input 
                    type="tel" name="phoneNumber" required value={studentData.phoneNumber} onChange={handleInput} placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                  />
                </div>
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">University Roll / ID *</label>
                  <input 
                    type="text" name="collegeRoll" required value={studentData.collegeRoll} onChange={handleInput} placeholder="GGV/DEPT/XX/..."
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                  />
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">GitHub Profile URL</label>
                  <input 
                    type="url" name="githubLink" value={studentData.githubLink} onChange={handleInput} placeholder="https://github.com/your-username"
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                  />
                </div>
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">Academic Semester *</label>
                  <select 
                    name="academicSemester" value={studentData.academicSemester} onChange={handleInput}
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-semibold cursor-pointer"
                  >
                    <option value="1st Semester">1st Semester (1st Year)</option>
                    <option value="2nd Semester">2nd Semester (1st Year)</option>
                    <option value="3rd Semester">3rd Semester (2nd Year)</option>
                    <option value="4th Semester">4th Semester (2nd Year)</option>
                    <option value="5th Semester">5th Semester (3rd Year)</option>
                    <option value="6th Semester">6th Semester (3rd Year)</option>
                    <option value="7th Semester">7th Semester (4th Year)</option>
                    <option value="8th Semester">8th Semester (4th Year)</option>
                  </select>
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-xs font-bold text-[#3c4043] tracking-wide block transition-colors group-focus-within:text-[#4285f4]">Primary Tech Interest *</label>
                  <select 
                    name="primaryTrack" value={studentData.primaryTrack} onChange={handleInput}
                    className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-semibold cursor-pointer"
                  >
                    <option value="Web Development">Web Development (React/Vite)</option>
                    <option value="Cloud Computing">Cloud Computing (Infra Track)</option>
                    <option value="Game Development">Game Development (Unity/Unreal)</option>
                    <option value="Graphics & Animation">Graphics & Animation (Blender/Unreal)</option>
                    <option value="Multi Media">Multi Media (Video Editing)</option>
                    <option value="AI & Machine Learning">AI & Machine Learning (Systems)</option>
                    <option value="Cybersecurity">Cybersecurity (InfoSec Track)</option>
                    <option value="Content Creation">Content Creation (Infra Track)</option>
                    <option value="UI/UX & Design Strategy">UI/UX & Design Strategy</option>
                  </select>
                </div>
              </div>
 
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Attach Resume (PDF Format) *</label>
                <div className="w-full relative flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl p-4 bg-gray-50/30 transition-all hover:bg-white hover:border-[#4285f4] group/upload">
                  <input 
                    type="file" name="resumeFile" accept=".pdf" required={!studentData.resumeFile} onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className="space-y-1 text-center pointer-events-none z-10">
                    <div className="text-2xl transform group-hover/upload:-translate-y-0.5 transition-transform duration-300">
                      {studentData.resumeFile ? '📄' : '📤'}
                    </div>
                    <p className="text-xs font-semibold text-[#202124]">
                      {studentData.resumeFile ? studentData.resumeFile.name : 'Click or Drag file here to attach'}
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {studentData.resumeFile ? `${(studentData.resumeFile.size / 1024 / 1024).toFixed(2)} MB` : 'PDF files up to 5MB maximum'}
                    </p>
                  </div>
                </div>
              </div>
 
              <button 
                type="submit" 
                className="w-full relative overflow-hidden bg-[#421c80] hover:bg-[#341466] text-white border border-transparent font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer text-xs uppercase tracking-widest group"
              >   
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#4285f4] via-[#ea4335] via-[#fbbc05] to-[#34a853] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                
                <span className="flex items-center justify-center gap-2 relative z-10">
                  Send Application Ticket 
                  <span className="transform group-hover:rotate-12 transition-transform duration-300">⚡</span>
                </span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}