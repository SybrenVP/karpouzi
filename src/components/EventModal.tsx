import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Mail, Phone, Users, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestsCount: 1,
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger celebratory confetti in karpouzi watermelon brand colors
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F04C63', '#228653', '#A3EBB1', '#FED053', '#FFADC6', '#1F2421'],
    });

    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', guestsCount: 1, notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalClose}
          className="fixed inset-0 bg-clayDark/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-surface w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-clayDark/10 p-6 sm:p-8 z-10 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleModalClose}
            className="absolute top-6 right-6 p-2 rounded-full text-graphite hover:text-clayDark hover:bg-canvas transition-colors"
            aria-label="Sluit pop-up"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="pr-8 mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-watermelon bg-watermelon-light px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Workshop Inschrijving</span>
                </div>
                <h3 id="modal-title" className="font-fredoka text-2xl sm:text-3xl text-clayDark">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-y-1 gap-x-3 text-xs sm:text-sm text-graphite mt-2">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-rind" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-watermelon" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sunshine" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-clayDark mb-1">
                    Volledige Naam *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-graphite absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="bijv. Sophie De Smedt"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-canvas/60 border border-clayDark/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-clayDark mb-1">
                      E-mailadres *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-graphite absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="jouw@email.be"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-canvas/60 border border-clayDark/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-clayDark mb-1">
                      Telefoonnummer *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-graphite absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="+32 4..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-canvas/60 border border-clayDark/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-clayDark mb-1">
                    Aantal Deelnemers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-graphite absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full bg-canvas/60 border border-clayDark/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-clayDark focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all appearance-none cursor-pointer"
                    >
                      <option value={1}>1 Persoon</option>
                      <option value={2}>2 Personen (Duo)</option>
                      <option value={3}>3 Personen</option>
                      <option value={4}>4 Personen (Groep)</option>
                      <option value={5}>5+ Personen (Privé groep op aanvraag)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-clayDark mb-1">
                    Opmerkingen of Vragen (optioneel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="bijv. dieetwensen, verjaardag verrassing, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-canvas/60 border border-clayDark/10 rounded-xl px-4 py-2.5 text-sm text-clayDark placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-watermelon focus:bg-surface transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-watermelon hover:bg-watermelon-hover text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-watermelon/25 text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-sunshine" />
                    <span>Inschrijving Bevestigen ({event.price})</span>
                  </motion.button>
                  <p className="text-center text-xs text-graphite mt-2">
                    Je ontvangt direct een bevestiging via e-mail met betalingsinstructies.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Submission Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-rind flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10 text-rind" />
              </div>
              <h3 className="font-fredoka text-3xl text-clayDark">
                Hoera, je bent aangemeld!
              </h3>
              <p className="font-caveat text-watermelon text-2xl font-bold">
                We kijken er enorm naar uit om samen te schilderen!
              </p>
              <p className="text-sm text-graphite max-w-sm mx-auto leading-relaxed">
                Bedankt <strong className="text-clayDark">{formData.name}</strong>. We hebben de details voor <strong className="text-clayDark">{event.title}</strong> naar <strong className="text-clayDark">{formData.email}</strong> gestuurd.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-rind hover:bg-rind-hover text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md transition-colors"
                >
                  Sluiten & Terug naar Website
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
