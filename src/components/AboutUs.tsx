import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Over karpouzi <span className="text-rind">keramiek</span>
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Narrative & Minimal Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-graphite text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-watermelon font-semibold">Karpouzi</strong> is het Griekse woord voor watermeloen — fris, sappig, kleurrijk en gemaakt om in partjes te snijden en samen te delen met de mensen die je graag ziet.
              </p>
              <p>
                Diezelfde ongedwongen zomersfeer brengen we naar jouw tafel. Geen gedoe met ingewikkelde pottenbakkerswielen of perfectionisme: met onze complete <strong className="text-clayDark font-semibold">DIY Pottery Boxen</strong> en gezellige <strong className="text-clayDark font-semibold">Sip & Paint avonden</strong> in Duffel voorzien we jou van kant-en-klaar biscuit keramiek, professionele Mayco glazuren en professioneel afbakken op 1000°C.
              </p>
            </div>

            {/* 3 Minimal Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-surface rounded-2xl p-5 border border-clayDark/10">
                <h3 className="font-fredoka text-lg text-clayDark mb-1">Geen Ervaring Nodig</h3>
                <p className="text-xs sm:text-sm text-graphite">Iedereen kan schilderen. Foutje? Met een nat sponsje begin je zo opnieuw.</p>
              </div>

              <div className="bg-surface rounded-2xl p-5 border border-clayDark/10">
                <h3 className="font-fredoka text-lg text-clayDark mb-1">100% Ontspannen</h3>
                <p className="text-xs sm:text-sm text-graphite">Even offline, handen uit de mouwen en genieten van gezellige me-time.</p>
              </div>

              <div className="bg-surface rounded-2xl p-5 border border-clayDark/10">
                <h3 className="font-fredoka text-lg text-clayDark mb-1">Alles in 1 Box</h3>
                <p className="text-xs sm:text-sm text-graphite">Penselen, glazuurpotjes, kleurstalen en inclusief de bakbeurt op 1000°C.</p>
              </div>
            </div>

            <p className="text-sm text-graphite pt-1">
              Ideaal voor vriendinnen, koppels, vrijgezellenfeestjes of teambuildings in en rond Duffel.
            </p>
          </motion.div>

          {/* Right Column: Clean Founders Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl bg-surface border border-clayDark/10 shadow-sm">
              <img 
                src="/images/3.png" 
                alt="Oprichters van karpouzi keramiek Duffel" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
