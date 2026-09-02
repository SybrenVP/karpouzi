import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Over Ons', href: '#over-ons' },
    { label: 'Evenementen', href: '#evenementen' },
    { label: 'Contact & Afhalen', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="backdrop-blur-md bg-surface/90 border border-clayDark/10 rounded-full px-6 py-3.5 shadow-sm flex items-center justify-between transition-all"
        aria-label="Hoofdnavigatie"
      >
        {/* Brand Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 focus:outline-none rounded-full"
        >
          <span className="font-fredoka text-xl sm:text-2xl font-bold tracking-tight text-clayDark group-hover:text-watermelon transition-colors">
            karpouzi <span className="text-rind font-normal text-lg sm:text-xl">keramiek</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-clayDark">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-graphite hover:text-watermelon text-sm transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-clayDark hover:text-watermelon transition-colors focus:outline-none"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-surface border border-clayDark/10 rounded-2xl p-4 shadow-lg flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-clayDark hover:text-watermelon font-medium text-sm py-2 px-3 rounded-lg hover:bg-canvas transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
