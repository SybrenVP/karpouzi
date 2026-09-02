import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const CONTACT_INFO = {
  email: 'hallo@karpouzi.be',
  phone: '+32 470 00 00 00',
  location: '2570 Duffel, België',
  locationNote: 'Atelier & ophaalpunt op afspraak',
  hours: 'Ophalen & terugbrengen (woe & zat)',
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
    setIsSent(true);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-canvas scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Neem Contact Op
          </h2>
          <p className="text-graphite text-sm mt-2">
            Vragen over DIY boxen of workshops in Duffel? We helpen je graag verder.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-3xl p-6 border border-clayDark/10 space-y-5">
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-watermelon shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-graphite font-medium">E-mail</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-clayDark hover:text-watermelon transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-rind shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-graphite font-medium">Telefoon & WhatsApp</div>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-semibold text-clayDark hover:text-rind transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-graphite/70 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-graphite font-medium">Atelier & Ophalen</div>
                  <div className="text-sm font-semibold text-clayDark">{CONTACT_INFO.location}</div>
                  <div className="text-xs text-graphite mt-0.5">{CONTACT_INFO.locationNote}</div>
                  <div className="text-xs text-graphite mt-0.5">{CONTACT_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-8 border border-clayDark/10 shadow-sm">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-clayDark mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="bijv. Laura Van Damme"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-canvas border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/50 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
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
                      className="w-full bg-canvas border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/50 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
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
                    className="w-full bg-canvas border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
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
                    className="w-full bg-canvas border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/50 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-watermelon hover:bg-watermelon-hover text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Verstuur Bericht
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-mint/30 text-rind flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-rind" />
                </div>
                <h4 className="font-fredoka text-xl text-clayDark">
                  Bedankt voor je bericht!
                </h4>
                <p className="text-xs sm:text-sm text-graphite max-w-sm mx-auto">
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

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-clayDark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-graphite">
          <div className="flex items-center gap-2">
            <span className="font-fredoka text-clayDark font-bold text-sm">karpouzi keramiek</span>
            <span>&bull;</span>
            <span>Atelier & DIY Keramiek in Duffel</span>
          </div>

          <div>
            <span>&copy; 2026 karpouzi keramiek. Alle rechten voorbehouden.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
