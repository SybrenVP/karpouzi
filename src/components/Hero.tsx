import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-10 md:pt-12 md:pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headlines Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-fredoka text-watermelon text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
          >
            Welkom bij karpouzi <span className="text-rind">keramiek</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-caveat text-rind text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-6"
          >
            “Waar creativiteit en gezelligheid belangrijker zijn dan perfectie!”
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-watermelon hover:bg-watermelon-hover text-white font-sans text-base font-semibold px-7 py-3 rounded-full transition-colors shadow-sm"
            >
              Huur een box
            </a>
          </motion.div>

        </div>

        {/* Visual Banner Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8"
        >
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-clayDark/10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left text highlight */}
              <div className="md:col-span-5 space-y-4 text-left">
                <h2 className="font-fredoka text-2xl sm:text-3xl text-clayDark leading-snug">
                  Haal de studiobeleving naar jouw huiskamer.
                </h2>
                <p className="text-graphite text-sm sm:text-base leading-relaxed">
                  Kies jouw favoriete biscuit keramiek, schilder met onze vaatwasser veilige glazuren en breng alles terug naar ons. Wij verzorgen het professionele glazuur- en ovenproces.
                </p>
                <div className="pt-1">
                  <a 
                    href="#over-ons" 
                    className="inline-flex items-center text-sm font-semibold text-rind hover:text-rind-hover transition-colors"
                  >
                    Ontdek meer over karpouzi keramiek &rarr;
                  </a>
                </div>
              </div>

              {/* Right visuals */}
              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl bg-canvas">
                  <img 
                    src="/images/10.png" 
                    alt="Handgeschilderd keramiek" 
                    className="w-full h-48 sm:h-60 object-cover"
                    loading="eager"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl bg-canvas">
                  <img 
                    src="/images/11.png" 
                    alt="Glanzend afgebakken keramiek" 
                    className="w-full h-48 sm:h-60 object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
