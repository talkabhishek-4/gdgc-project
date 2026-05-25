import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

// --- IMPORT ALL COMPONENT SUB-PAGES ---
import Home from './pages/Home'; // Assuming your landing dashboard resides here
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage'; 
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import JoinUsPage from './pages/JoinUsPage';

export default function App() {
  // State hook managing active component rendering layers
  const [currentPage, setCurrentPage] = useState('home');

  // Automatically scroll view window seamlessly up to the header deck when pages mutate
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Route evaluation rendering algorithm switch map
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'gallery': // Mapped cleanly to handle your optimized contact grid view layout
        return <ContactPage />;
      case 'team':
        return <TeamPage />;
      case 'join':
        return <JoinUsPage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col justify-between antialiased selection:bg-blue-100 selection:text-blue-700">
      
      {/* GLOBAL RUNTIME STICKY NAVIGATION BAR ACCENT */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* DYNAMIC WORKSPACE COMPONENT PANEL DISPLAY */}
      <main className="flex-grow w-full">
        {renderActiveView()}
      </main>

      {/* FOOTER ACCENT PANEL PLACEHOLDER */}
      <footer className="w-full bg-[#202124] text-gray-400 text-xs py-6 border-t border-gray-800 text-center">
        <p>© {new Date().getFullYear()} GDG On Campus GGV • Built with Passion</p>
      </footer>

    </div>
  );
}