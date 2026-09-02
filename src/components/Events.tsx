import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { EventItem } from '../types';
import { EventModal } from './EventModal';

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
    statusLabel: 'Volzet',
    description: 'Gezellige avond keramiek beschilderen onder het genot van een hapje en zomers drankje. Inclusief alle materialen, Mayco glazuren en afbakken.',
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
    statusLabel: 'Nog 4 plaatsen',
    description: 'Schilder jouw favoriete keramiek mok of schaaltje in warme herfsttinten. Inclusief glazuurinstructies, drankje en tapas.',
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
    statusLabel: 'Binnenkort',
    description: 'Creatieve zondagnamiddag met verse thee, zoete lekkernijen en het beschilderen van een unieke theetas en dessertbordje.',
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
    <section id="evenementen" className="py-20 md:py-28 relative scroll-mt-24 bg-surface/40 border-y border-clayDark/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl text-clayDark">
            Evenementen & <span className="text-rind">Workshops</span>
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS_DATA.map((event, index) => {
            const isSoldOut = event.status === 'sold-out';
            const isAvailable = event.status === 'available';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface rounded-3xl p-6 flex flex-col justify-between border transition-all ${
                  isSoldOut 
                    ? 'border-clayDark/10 opacity-75' 
                    : 'border-clayDark/10 hover:border-clayDark/20 shadow-sm'
                }`}
              >
                <div>
                  {/* Date & Status */}
                  <div className="flex items-center justify-between gap-2 text-xs font-medium mb-3">
                    <span className="text-rind font-semibold">{event.date}</span>
                    <span className={isSoldOut ? 'text-graphite/70' : isAvailable ? 'text-watermelon font-semibold' : 'text-graphite'}>
                      {event.statusLabel}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-fredoka text-xl text-clayDark mb-2 leading-snug">
                    {event.title}
                  </h3>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs text-graphite mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-graphite/60 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-graphite/60 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-graphite text-xs leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Price & Action Row */}
                <div className="pt-4 border-t border-clayDark/5 flex items-center justify-between">
                  <div>
                    <span className="font-fredoka text-base sm:text-lg text-clayDark font-bold">
                      {event.price}
                    </span>
                  </div>

                  {isSoldOut ? (
                    <span className="text-xs font-medium text-graphite/60 px-3 py-1.5 rounded-full bg-canvas">
                      Volzet
                    </span>
                  ) : isAvailable ? (
                    <button
                      onClick={() => handleOpenRegistration(event)}
                      className="bg-watermelon hover:bg-watermelon-hover text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                    >
                      Inschrijven
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenRegistration(event)}
                      className="bg-surface hover:bg-canvas text-clayDark border border-clayDark/15 text-xs font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
                    >
                      Binnenkort
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Private Workshop Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-clayDark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-fredoka text-lg text-clayDark">
              Privé workshop op maat?
            </h4>
            <p className="text-xs sm:text-sm text-graphite mt-0.5">
              Voor groepen en teambuildings organiseren we sessies in ons atelier in Duffel of op locatie.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs sm:text-sm font-semibold text-watermelon hover:text-watermelon-hover underline transition-colors"
          >
            Vraag een sessie aan &rarr;
          </a>
        </div>

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
