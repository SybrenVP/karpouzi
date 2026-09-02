import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Over Ons', href: '#over-ons' },
    { label: 'Evenementen', href: '#evenementen' },
    { label: 'Contact & Afhalen', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="backdrop-blur-md bg-surface/90 border border-clayDark/5 rounded-full px-5 py-3 shadow-lg shadow-clayDark/5 flex items-center justify-between transition-all"
        aria-label="Hoofdnavigatie"
      >
        {/* Brand Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-watermelon rounded-full px-2 py-1"
        >
          <motion.div 
            whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 rounded-full bg-watermelon-light flex items-center justify-center border border-rind/20 shadow-sm"
          >
            {/* Watermelon Slice SVG Logo */}
            <svg viewBox="0 0 100 100" className="w-7 h-7">
              {/* Outer Rind Green */}
              <path d="M 10 32 A 42 42 0 0 0 90 32 Z" fill="#228653" />
              {/* Inner Rind Mint */}
              <path d="M 15 32 A 37 37 0 0 0 85 32 Z" fill="#A3EBB1" />
              {/* Juicy Watermelon Flesh */}
              <path d="M 19 32 A 33 33 0 0 0 81 32 Z" fill="#F04C63" />
              {/* Seeds */}
              <circle cx="35" cy="40" r="2.8" fill="#1F2421" />
              <circle cx="50" cy="48" r="2.8" fill="#1F2421" />
              <circle cx="65" cy="40" r="2.8" fill="#1F2421" />
            </svg>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-fredoka text-xl sm:text-2xl font-bold tracking-tight text-clayDark group-hover:text-watermelon transition-colors">
              karpouzi <span className="text-rind font-normal text-lg sm:text-xl">keramiek</span>
            </span>
            <span className="font-caveat text-xs -mt-1 text-rind font-bold hidden sm:inline">
              diy pottery & workshops
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-clayDark">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-graphite hover:text-watermelon text-sm transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-watermelon transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex items-center gap-2 bg-rind hover:bg-rind-hover text-white font-sans text-sm font-semibold px-4 py-2.5 rounded-full shadow-md shadow-rind/20 transition-colors"
          >
            <Package className="w-4 h-4 text-sunshine" />
            <span>Huur een Box</span>
          </motion.a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-clayDark hover:text-watermelon transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-watermelon"
            aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-surface/95 backdrop-blur-md border border-clayDark/5 rounded-3xl p-5 shadow-xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-clayDark hover:text-watermelon font-medium text-base py-2 px-3 rounded-xl hover:bg-canvas transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-rind text-white font-semibold py-3 px-4 rounded-2xl shadow-md text-sm mt-1"
            >
              <Package className="w-4 h-4 text-sunshine" />
              <span>Huur een Box</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
