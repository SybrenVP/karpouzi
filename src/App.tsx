import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Events } from './components/Events';
import { ContactFooter } from './components/ContactFooter';
import { WatermelonSeedsBackground } from './components/ConfettiBackground';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-clayDark flex flex-col relative selection:bg-watermelon selection:text-white">
      {/* Background Effect: Small Sparse Watermelon Seeds */}
      <WatermelonSeedsBackground />

      {/* Section 1: Sticky Navigation Bar */}
      <Navbar /> 

      <main className="flex-grow relative z-10">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Over Ons */}
        <AboutUs />

        {/* Section 8: Evenementen & Workshops (Sip & Paint) */}
        {/* <Events /> */}

        {/* =========================================================================
            ⏸️ PHASE 2 PLACEHOLDER SECTIONS:
            - Section 9: Reviews & Social Community Wall
           ========================================================================= */}
      </main>

      {/* Section 10: Contact & Footer */}
      <ContactFooter />
    </div>
  );
};

export default App;
