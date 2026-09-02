import React from 'react';
import { motion } from 'framer-motion';
import { Package, Calendar, Star, MapPin, Sparkles, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headlines Section: 2 Lines */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Fun watermelon pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-watermelon-light border border-watermelon/20 text-watermelon font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-rind animate-pulse" />
            <span>DIY Keramiek & Workshops in Duffel</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fredoka text-watermelon text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
          >
            Welkom bij karpouzi <span className="text-rind">keramiek</span>
          </motion.h1>

          {/* Handwritten Slogan with Caveat & Squiggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block mt-3 mb-8"
          >
            <p className="font-caveat text-rind text-2xl sm:text-3xl md:text-4xl font-bold px-4">
              “Waar creativiteit en gezelligheid belangrijker zijn dan perfectie!”
            </p>
            {/* SVG Watermelon Wave Squiggle with Seed Accents */}
            <svg 
              className="w-full h-4 text-watermelon/50 mt-1" 
              viewBox="0 0 300 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M3 11C40 4 80 14 120 9C160 5 200 13 240 8C265 5.5 285 9.5 297 10" 
                stroke="#F04C63" 
                strokeWidth="3.5" 
                strokeLinecap="round"
              />
              <circle cx="85" cy="5" r="1.8" fill="#1F2421" />
              <circle cx="170" cy="12" r="1.8" fill="#1F2421" />
              <circle cx="230" cy="4" r="1.8" fill="#1F2421" />
            </svg>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-watermelon hover:bg-watermelon-hover text-white font-sans text-base sm:text-lg font-bold px-8 py-4 rounded-full shadow-lg shadow-watermelon/25 transition-all"
            >
              <Package className="w-5 h-5 text-sunshine" />
              <span>Huur Jouw Karpouzi Box</span>
            </motion.a>

            <motion.a
              href="#evenementen"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-surface hover:bg-canvas text-clayDark font-sans text-base sm:text-lg font-semibold px-7 py-4 rounded-full border-2 border-rind/20 shadow-sm transition-all"
            >
              <Calendar className="w-5 h-5 text-rind" />
              <span>Ontdek Workshops</span>
            </motion.a>
          </motion.div>

          {/* Above-The-Fold Trust Micro-Badges (Vector Icons) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 bg-surface/80 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl border border-clayDark/5 shadow-xs">
              <Star className="w-4 h-4 text-sunshine fill-sunshine shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-clayDark">5/5 Beoordelingen</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-surface/80 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl border border-clayDark/5 shadow-xs">
              <Package className="w-4 h-4 text-watermelon shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-clayDark">Alles-in-1 Box</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-surface/80 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl border border-clayDark/5 shadow-xs">
              <MapPin className="w-4 h-4 text-rind shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-clayDark">Ophalen in Duffel</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-surface/80 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl border border-clayDark/5 shadow-xs">
              <Sparkles className="w-4 h-4 text-blossom shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-clayDark">Inclusief Afbakken</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Banner Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 relative"
        >
          <div className="relative mx-auto max-w-4xl bg-surface rounded-[2.5rem] p-4 sm:p-6 shadow-xl border border-clayDark/5 overflow-hidden">
            {/* Background Pastel Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sunshine/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-watermelon/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left text highlight */}
              <div className="md:col-span-5 flex flex-col justify-center space-y-4 p-2 sm:p-4 text-left">
                <div className="inline-flex items-center gap-2 text-watermelon font-bold text-sm">
                  <Heart className="w-4 h-4 fill-watermelon" />
                  <span>Jouw Creatieve Me-Time of Date Night</span>
                </div>
                <h3 className="font-fredoka text-2xl sm:text-3xl text-clayDark leading-snug">
                  Haal de studiobeleving naar jouw huiskamer.
                </h3>
                <p className="text-graphite text-sm sm:text-base leading-relaxed">
                  Kies jouw favoriete biscuit keramiek, schilder met onze veilige Mayco glazuren en breng alles terug naar Duffel. Wij verzorgen het professionele glazuur- en ovenproces!
                </p>
                <div className="pt-2">
                  <a 
                    href="#over-ons" 
                    className="inline-flex items-center text-sm font-semibold text-rind hover:text-rind-hover underline underline-offset-4"
                  >
                    Ontdek het verhaal achter karpouzi keramiek &rarr;
                  </a>
                </div>
              </div>

              {/* Right visuals */}
              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-3xl shadow-md bg-canvas">
                  <img 
                    src="/images/10.png" 
                    alt="Handgeschilderd keramiek met karpouzi keramiek" 
                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-clayDark shadow-xs">
                    Kleurrijke Resultaten
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl shadow-md bg-canvas">
                  <img 
                    src="/images/11.png" 
                    alt="Unieke DIY keramiek voorbeelden" 
                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-clayDark shadow-xs">
                    Glanzend Afgebakken
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
