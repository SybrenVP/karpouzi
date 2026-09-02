import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Sparkles, ArrowRight, Lock, Bell } from 'lucide-react';
import { EventItem } from '../types';
import { EventModal } from './EventModal';

// ============================================================================
// ⚠️ DUMMY DATA / CLIENT INPUT REQUIRED:
// Field: Sip & Paint Workshop Schedule & Ticket Pricing
// Reason: Mockup placeholder workshop dates and seat quotas for Duffel atelier
// Replace with: Confirmed workshop calendar dates, maximum seat limits, and ticket prices
// ============================================================================
const EVENTS_DATA: EventItem[] = [
  {
    id: 'sip-paint-sept-2026',
    title: 'Karpouzi Sip & Paint Avond',
    date: '20 September 2026',
    time: '19:30 - 22:00',
    location: 'Atelier Duffel',
    price: '€ 45 p.p.',
    spotsLeft: 0,
    status: 'sold-out',
    statusLabel: 'VOLZET',
    description: 'Gezellige avond keramiek beschilderen onder het genot van een hapje en zomers drankje. Inclusief alle materialen, Mayco glazuren en professioneel afbakken.',
    // ⚠️ DUMMY IMAGE: Unsplash pottery workshop placeholder
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sip-paint-oct-2026',
    title: 'Sip & Paint Herfst Editie',
    date: '20 Oktober 2026',
    time: '19:30 - 22:00',
    location: 'Atelier Duffel',
    price: '€ 45 p.p.',
    spotsLeft: 4,
    status: 'available',
    statusLabel: 'SCHRIJF NU IN',
    description: 'Schilder jouw favoriete keramiek mok of schaaltje in warme tinten. Inclusief glazuurinstructies, wijntje/mocktail & tapas.',
    // ⚠️ DUMMY IMAGE: Ceramics and painting placeholder
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ceramics-tea-nov-2026',
    title: 'Karpouzi Keramiek & High Tea',
    date: '15 November 2026',
    time: '14:00 - 17:00',
    location: 'Atelier Duffel',
    price: '€ 49 p.p.',
    spotsLeft: 10,
    status: 'upcoming',
    statusLabel: 'BINNENKORT',
    description: 'Creatieve zondagnamiddag met verse thee, zoete lekkernijen en het beschilderen van een unieke theetas en dessertbordje.',
    // ⚠️ DUMMY IMAGE: Pottery workshop atmosphere placeholder
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
  },
];

export const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRegistration = (event: EventItem) => {
    if (event.status === 'sold-out') return;
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section id="evenementen" className="py-20 md:py-28 relative scroll-mt-24 bg-surface/50 border-y border-clayDark/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 1 Line */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Evenementen & <span className="text-rind">Workshops</span>
          </h2>
        </div>

        {/* Event Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event, index) => {
            const isSoldOut = event.status === 'sold-out';
            const isAvailable = event.status === 'available';
            const isUpcoming = event.status === 'upcoming';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`clay-card rounded-[2.5rem] p-6 flex flex-col justify-between border relative overflow-hidden transition-all ${
                  isAvailable 
                    ? 'border-watermelon/30 shadow-lg ring-2 ring-watermelon/10 bg-surface' 
                    : isSoldOut 
                      ? 'border-clayDark/10 bg-canvas/60 opacity-90' 
                      : 'border-clayDark/10 bg-surface'
                }`}
              >
                <div>
                  {/* Top Badge & Date Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite bg-canvas px-3 py-1.5 rounded-full border border-clayDark/5">
                      <Calendar className="w-3.5 h-3.5 text-rind" />
                      {event.date}
                    </span>

                    {/* Status Pill Badge */}
                    {isSoldOut && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-graphite/15 text-graphite">
                        <Lock className="w-3 h-3" />
                        {event.statusLabel}
                      </span>
                    )}
                    {isAvailable && (
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-watermelon-light text-watermelon border border-watermelon/20 shadow-xs"
                      >
                        <Sparkles className="w-3 h-3 text-watermelon" />
                        {event.statusLabel}
                      </motion.span>
                    )}
                    {isUpcoming && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-mint-light text-rind-dark border border-mint">
                        <Bell className="w-3 h-3 text-rind" />
                        {event.statusLabel}
                      </span>
                    )}
                  </div>

                  {/* Event Title */}
                  <h3 className="font-fredoka text-xl sm:text-2xl text-clayDark mb-2 leading-snug">
                    {event.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="space-y-1.5 text-xs sm:text-sm text-graphite mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-watermelon shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sunshine shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-rind shrink-0" />
                      <span>
                        {isSoldOut 
                          ? 'Geen plaatsen meer beschikbaar' 
                          : isAvailable 
                            ? `Nog ${event.spotsLeft} plaatsen vrij` 
                            : 'Inschrijving opent spoedig'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-graphite text-xs sm:text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Price & Action Row */}
                <div className="pt-4 border-t border-clayDark/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-graphite block">Prijs per persoon</span>
                    <span className="font-fredoka text-lg sm:text-xl text-clayDark font-bold">
                      {event.price}
                    </span>
                  </div>

                  {isSoldOut ? (
                    <button
                      disabled
                      className="bg-graphite/10 text-graphite/60 font-semibold px-4 py-2.5 rounded-full text-xs sm:text-sm cursor-not-allowed flex items-center gap-1.5"
                    >
                      <span>Volzet</span>
                    </button>
                  ) : isAvailable ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOpenRegistration(event)}
                      className="bg-watermelon hover:bg-watermelon-hover text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md shadow-watermelon/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Inschrijven</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOpenRegistration(event)}
                      className="bg-rind hover:bg-rind-hover text-white font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md shadow-rind/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Houd me op de hoogte</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Private Workshop / Group Inquiries Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-mint/20 border border-mint/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-fredoka text-xl text-clayDark">
              Een privé workshop organiseren voor jouw groep of bedrijf?
            </h4>
            <p className="text-sm text-graphite">
              Vanaf 6 personen organiseren we speciale karpouzi Sip & Paint sessies op maat in Duffel of op jouw eigen locatie!
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-rind hover:bg-rind-hover text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-colors"
          >
            Vraag een Privé Sessie Aan
          </a>
        </motion.div>

      </div>

      {/* Registration Modal Dialog */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
      />
    </section>
  );
};
