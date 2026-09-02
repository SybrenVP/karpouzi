import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, PackageCheck, Coffee } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 1 Line */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Over karpouzi <span className="text-rind">keramiek</span>
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Narrative & Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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

            {/* 3 Bullet Feature Cards with Lucide Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-surface rounded-2xl p-5 border border-clayDark/5 shadow-sm hover:border-watermelon/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-watermelon/10 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-watermelon" />
                </div>
                <h3 className="font-fredoka text-lg text-clayDark mb-1">Geen Ervaring Nodig</h3>
                <p className="text-xs sm:text-sm text-graphite">Iedereen kan schilderen. Foutje? Met een nat sponsje begin je zo opnieuw.</p>
              </div>

              <div className="bg-surface rounded-2xl p-5 border border-clayDark/5 shadow-sm hover:border-rind/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rind/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-rind" />
                </div>
                <h3 className="font-fredoka text-lg text-clayDark mb-1">100% Ontspannen</h3>
                <p className="text-xs sm:text-sm text-graphite">Even offline, handen uit de mouwen en genieten van pure creatieve me-time.</p>
              </div>

              <div className="bg-surface rounded-2xl p-5 border border-clayDark/5 shadow-sm hover:border-sunshine/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sunshine/20 flex items-center justify-center mb-3">
                  <PackageCheck className="w-5 h-5 text-watermelon" />
                </div>
                <h3 className="font-fredoka text-lg text-clayDark mb-1">Alles in 1 Box</h3>
                <p className="text-xs sm:text-sm text-graphite">Penselen, glazuurpotjes, kleurstalen en inclusief de bakbeurt op 1000°C.</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-surface rounded-full px-5 py-2.5 border border-clayDark/5 shadow-xs">
                <Coffee className="w-5 h-5 text-watermelon" />
                <span className="text-sm font-medium text-clayDark">
                  Ideaal voor vriendinnen, koppels, vrijgezellenfeestjes of teambuildings!
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founders Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Organic Backdrop Shapes */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-mint/30 rounded-[3.5rem] rotate-3 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-watermelon/15 rounded-[3.5rem] -rotate-2 -z-10" />
            
            {/* Framed Image */}
            <div className="relative bg-surface p-4 sm:p-5 rounded-[3rem] shadow-xl border border-clayDark/5 overflow-hidden">
              <img 
                src="/images/3.png" 
                alt="Oprichters van karpouzi keramiek Duffel" 
                className="w-full h-auto object-cover rounded-[2.5rem]"
                loading="lazy"
              />

              {/* Floating Decorative Ceramic Badge */}
              <div className="absolute bottom-7 left-7 bg-surface/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-clayDark/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-watermelon flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-fredoka text-sm text-clayDark">Sybren & Team</div>
                  <div className="font-caveat text-xs text-rind font-bold">Welkom bij karpouzi keramiek!</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
