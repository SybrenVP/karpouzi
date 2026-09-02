import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// ============================================================================
// ⚠️ DUMMY DATA / CLIENT INPUT REQUIRED:
// Field: Official Studio Contact Information & Pickup Location
// Reason: Placeholder email, phone and atelier pickup address in Duffel
// Replace with: Client's official studio email, WhatsApp number, and street address
// ============================================================================
const CONTACT_INFO = {
  email: 'hallo@karpouzi.be',
  phone: '+32 470 00 00 00',
  location: '2570 Duffel, België',
  locationNote: 'Exact atelieradres volgt na boeking van jouw box',
  hours: 'Ophalen & terugbrengen op afspraak (woe & zat)',
};

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Pottery Box Reserveren',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Watermelon celebration confetti on message submit
    confetti({
      particleCount: 65,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#F04C63', '#228653', '#A3EBB1', '#FED053', '#FFADC6', '#1F2421'],
    });

    setIsSent(true);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-canvas overflow-hidden scroll-mt-20">
      
      {/* Decorative Geometric Ceramic & Melon Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-watermelon/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-mint/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sunshine/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: 1 Line */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Neem Contact Op met <span className="text-watermelon">karpouzi</span>
          </h2>
        </div>

        {/* 3 Interactive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <motion.a
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ y: -5 }}
            className="bg-surface rounded-3xl p-6 border border-clayDark/5 shadow-sm hover:shadow-md hover:border-watermelon/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-watermelon/10 text-watermelon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-watermelon" />
              </div>
              <h3 className="font-fredoka text-xl text-clayDark mb-1">E-mail Ons</h3>
              <p className="text-xs text-graphite mb-3">Voor vragen, box reservaties en workshops</p>
            </div>
            <div>
              <span className="font-semibold text-sm text-watermelon group-hover:underline break-all">
                {CONTACT_INFO.email}
              </span>
            </div>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={`tel:${CONTACT_INFO.phone}`}
            whileHover={{ y: -5 }}
            className="bg-surface rounded-3xl p-6 border border-clayDark/5 shadow-sm hover:shadow-md hover:border-rind/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rind/10 text-rind flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-rind" />
              </div>
              <h3 className="font-fredoka text-xl text-clayDark mb-1">WhatsApp & Bellen</h3>
              <p className="text-xs text-graphite mb-3">Snel antwoord via WhatsApp of telefoon</p>
            </div>
            <div>
              <span className="font-semibold text-sm text-rind group-hover:underline">
                {CONTACT_INFO.phone}
              </span>
            </div>
          </motion.a>

          {/* Studio Location Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-surface rounded-3xl p-6 border border-clayDark/5 shadow-sm hover:shadow-md hover:border-sunshine/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sunshine/30 text-clayDark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-watermelon" />
              </div>
              <h3 className="font-fredoka text-xl text-clayDark mb-1">Atelier & Ophaalpunt</h3>
              <p className="text-xs text-graphite mb-2">{CONTACT_INFO.location}</p>
              <div className="flex items-center gap-1.5 text-xs text-graphite mt-1">
                <Clock className="w-3.5 h-3.5 text-rind shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-clayDark/5">
              <span className="text-xs text-graphite italic">
                {CONTACT_INFO.locationNote}
              </span>
            </div>
          </motion.div>

        </div>

        {/* Interactive Quick Message / Box Request Form */}
        <div className="max-w-2xl mx-auto bg-surface rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-clayDark/5 mb-16">
          <div className="text-center mb-6">
            <h3 className="font-fredoka text-2xl text-clayDark">
              Stuur ons direct een berichtje
            </h3>
            <p className="text-xs sm:text-sm text-graphite mt-1">
              Geef je gewenste datum of vraag door en we reageren binnen 24 uur.
            </p>
          </div>

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-clayDark mb-1">
                    Jouw Naam *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="bijv. Laura Van Damme"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-canvas/70 border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-clayDark mb-1">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jouw@email.be"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-canvas/70 border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-clayDark mb-1">
                  Onderwerp
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-canvas/70 border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                >
                  <option value="Pottery Box Reserveren">DIY Pottery Box Reserveren</option>
                  <option value="Sip & Paint Vraag">Vraag over Sip & Paint Workshop</option>
                  <option value="Groep of Teambuilding">Groepssessie / Teambuilding op Maat</option>
                  <option value="Algemene Vraag">Algemene Vraag</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-clayDark mb-1">
                  Bericht *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Vertel ons meer over je plannen of stel gerust je vraag..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-canvas/70 border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-watermelon hover:bg-watermelon-hover text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-watermelon/25 text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Verstuur Bericht</span>
              </motion.button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-mint/30 text-rind flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-rind" />
              </div>
              <h4 className="font-fredoka text-2xl text-clayDark">
                Bedankt voor je berichtje!
              </h4>
              <p className="text-sm text-graphite max-w-sm mx-auto">
                We hebben je vraag goed ontvangen en nemen spoedig contact met je op via <strong className="text-clayDark">{formData.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSent(false);
                  setFormData({ name: '', email: '', subject: 'Pottery Box Reserveren', message: '' });
                }}
                className="text-xs text-watermelon font-semibold underline mt-2"
              >
                Nog een bericht sturen
              </button>
            </div>
          )}
        </div>

        {/* Footer Bottom Divider & Copyright */}
        <div className="pt-8 border-t border-clayDark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-graphite">
          <div className="flex items-center gap-2">
            <span className="font-fredoka text-clayDark font-bold text-sm">karpouzi keramiek</span>
            <span>&bull;</span>
            <span>Atelier & DIY Keramiek in Duffel</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Gemaakt met</span>
            <Heart className="w-3.5 h-3.5 text-watermelon fill-watermelon inline" />
            <span>voor creatieve momenten</span>
          </div>

          <div>
            <span>&copy; 2026 karpouzi keramiek. Alle rechten voorbehouden.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
