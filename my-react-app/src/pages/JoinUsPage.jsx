import React, { useState } from 'react';
import joinHeroImg from '../assets/hero.png'; 

export default function JoinUsPage() {
  const [studentData, setStudentData] = useState({
    fullName: '',
    emailAddress: '',
    collegeRoll: '',
    academicSemester: '4th Semester',
    primaryTrack: 'Web Development',
    githubLink: '',
    resumeLink: ''
  });

  const handleInput = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Logged! Welcome to the family, ${studentData.fullName}. The core executive team will reach out to your university mail loop shortly.`);
    setStudentData({ 
      fullName: '', 
      emailAddress: '', 
      collegeRoll: '', 
      academicSemester: '4th Semester', 
      primaryTrack: 'Web Development',
      githubLink: '',
      resumeLink: ''
    });
  };

  return (
    <section className="w-full bg-[#f8fafd] pt-4 pb-16 md:pb-24 font-sans tracking-wide text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Animated Background Decorative Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse pointer-events-none duration-[8000ms]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse pointer-events-none duration-[6000ms]"></div>

        {/* ================= PREMIUM INTEGRATED HERO BANNER SPLIT ================= */}
        <div className="w-full bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-transparent rounded-[2.5rem] border border-blue-100/30 p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative transition-all duration-500 hover:shadow-sm">
          
          {/* LEFT SIDE COLUMN: TEXT ENTRY (7 COLS) */}
          <div className="lg:col-span-7 space-y-4 z-10 text-left transform transition-all duration-700 translate-y-0 opacity-100">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea4335] bg-[#ea4335]/10 px-3 py-1.5 rounded-md inline-block animate-bounce duration-[3000ms]">
              Member Onboarding
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#202124] tracking-tight leading-none transition-all">
              Join the Family Vector
            </h2>
            <div className="w-16 h-1 bg-[#4285f4] rounded-full transition-all duration-500 hover:w-24"></div>
            <p className="text-sm md:text-base text-[#5f6368] leading-relaxed max-w-xl pt-2">
              Ready to push production code, build intelligent neural networks, or shape digital interfaces? 
              Fill out your tracking credentials below to secure your community authorization ticket.
            </p>
          </div>

          {/* RIGHT SIDE COLUMN: DYNAMIC ILLUSTRATION (5 COLS) */}
          <div className="lg:col-span-5 w-full h-[240px] md:h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-black/5 relative z-10 shadow-sm group">
            <img 
              src={joinHeroImg} 
              alt="Join GDGC GGV Family Campaign Illustration" 
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] transform transition-transform duration-700 group-hover:scale-103"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 font-bold">GDG Community Illustration Panel</div>');
              }}
            />
          </div>

          {/* Subtle Background Accent Shapes */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/2 -top-12 w-36 h-36 bg-green-100/30 rounded-full blur-2xl pointer-events-none"></div>
        </div>


        {/* ================= MEMBER APPLICATION ANIMATED FORM BOX ================= */}
        <div className="max-w-2xl mx-auto w-full bg-white rounded-[2.5rem] border border-gray-100 shadow-md p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          {/* Top Multi-Color Brand Ribbon */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#34a853]"></div>

          <h3 className="text-xl font-bold text-[#202124] mb-1">Onboarding Profile</h3>
          <p className="text-xs text-gray-400 font-medium mb-6">Provide accurate university record parameters to secure authorization loop lines.</p>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {/* FULL NAME */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Your Name *</label>
              <input 
                type="text" name="fullName" required value={studentData.fullName} onChange={handleInput} placeholder=""
                className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
              />
            </div>

            {/* EMAIL & ID GRID MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Email Address *</label>
                <input 
                  type="email" name="emailAddress" required value={studentData.emailAddress} onChange={handleInput} placeholder="XYZ@gmail.com"
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">University Roll / ID *</label>
                <input 
                  type="text" name="collegeRoll" required value={studentData.collegeRoll} onChange={handleInput} placeholder="GGV/Dept/XX/....."
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
            </div>

            {/* DROPDOWNS MATRICES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Academic Semester *</label>
                <select 
                  name="academicSemester" value={studentData.academicSemester} onChange={handleInput}
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-semibold cursor-pointer"
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
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Primary Tech Interest *</label>
                <select 
                  name="primaryTrack" value={studentData.primaryTrack} onChange={handleInput}
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-semibold cursor-pointer"
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

            {/* ================= EXTRA UPGRADE: GITHUB & RESUME PORTFOLIO CHANNELS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* GitHub Link Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block flex items-center gap-1">
                  <span>GitHub Profile Link</span>
                  <span className="text-gray-400 text-[10px] font-normal">(Optional)</span>
                </label>
                <input 
                  type="url" name="githubLink" value={studentData.githubLink} onChange={handleInput} placeholder="https://github.com/your-username"
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>

              {/* Resume Link Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block flex items-center gap-1">
                  <span>Resume URL (Drive/Link) *</span>
                </label>
                <input 
                  type="url" name="resumeLink" required value={studentData.resumeLink} onChange={handleInput} placeholder="https://drive.google.com/..."
                  className="w-full px-4 py-3 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
            </div>

            {/* APPLICATION ACTION BUTTON */}
            <button 
              type="submit" 
              className="w-full text-center bg-[#4285f4] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] transform hover:-translate-y-0.5 cursor-pointer text-xs uppercase tracking-widest mt-6"
            >
              Submit Membership Application
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}