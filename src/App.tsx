import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Events } from './components/Events';
import { ContactFooter } from './components/ContactFooter';
import { ConfettiBackground } from './components/ConfettiBackground';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-clayDark flex flex-col relative selection:bg-watermelon selection:text-white">
      {/* Background Ambient Floating Watermelon Particles */}
      <ConfettiBackground />

      {/* Section 1: Sticky Floating Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Over Ons */}
        <AboutUs />

        {/* =========================================================================
            ⏸️ PHASE 2 PLACEHOLDER SECTIONS (Deferred per AGENT_IMPLEMENTATION_PLAN.md):
            - Section 4: Your Pottery Moment (Hoe gaat het in zijn werk?)
            - Section 5: Wat zit er in de box?
            - Section 6: Interactive DIY Booking Wizard
            - Section 7: Tips & Praktische Afspraken Accordion
           ========================================================================= */}

        {/* Section 8: Evenementen & Workshops (Sip & Paint) */}
        <Events />

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
