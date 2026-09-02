import React from 'react';

interface WatermelonParticle {
  id: number;
  top: string;
  left: string;
  size: number;
  rotate: number;
  type: 'slice' | 'seed' | 'bubble' | 'rind-dot';
  color?: string;
  duration: string;
  delay: string;
}

export const ConfettiBackground: React.FC = () => {
  const particles: WatermelonParticle[] = [
    { id: 1, top: '7%', left: '4%', size: 34, rotate: 18, type: 'slice', duration: '7s', delay: '0s' },
    { id: 2, top: '14%', left: '91%', size: 14, rotate: 35, type: 'seed', duration: '6s', delay: '1s' },
    { id: 3, top: '24%', left: '10%', size: 12, rotate: 0, type: 'bubble', color: '#FED053', duration: '8s', delay: '0.5s' },
    { id: 4, top: '34%', left: '88%', size: 36, rotate: -25, type: 'slice', duration: '7.5s', delay: '2s' },
    { id: 5, top: '44%', left: '5%', size: 16, rotate: 50, type: 'seed', duration: '9s', delay: '1.5s' },
    { id: 6, top: '56%', left: '93%', size: 16, rotate: 0, type: 'bubble', color: '#A3EBB1', duration: '6.5s', delay: '0.8s' },
    { id: 7, top: '67%', left: '7%', size: 32, rotate: 42, type: 'slice', duration: '8s', delay: '2.5s' },
    { id: 8, top: '78%', left: '92%', size: 15, rotate: -15, type: 'seed', duration: '7s', delay: '1.2s' },
    { id: 9, top: '88%', left: '4%', size: 18, rotate: 0, type: 'bubble', color: '#FFADC6', duration: '8.5s', delay: '0.3s' },
    { id: 10, top: '94%', left: '87%', size: 30, rotate: -35, type: 'slice', duration: '7.2s', delay: '1.8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute opacity-65 transition-transform"
          style={{
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rotate}deg)`,
            animation: `float ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }}
        >
          {p.type === 'slice' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 100 100"
              className="drop-shadow-xs"
            >
              {/* Outer Rind */}
              <path d="M 10 32 A 42 42 0 0 0 90 32 Z" fill="#228653" />
              {/* Inner Rind Mint */}
              <path d="M 15 32 A 37 37 0 0 0 85 32 Z" fill="#A3EBB1" />
              {/* Juicy Flesh Red */}
              <path d="M 19 32 A 33 33 0 0 0 81 32 Z" fill="#F04C63" />
              {/* Seeds */}
              <circle cx="36" cy="40" r="2.8" fill="#1F2421" />
              <circle cx="50" cy="48" r="2.8" fill="#1F2421" />
              <circle cx="64" cy="40" r="2.8" fill="#1F2421" />
            </svg>
          )}

          {p.type === 'seed' && (
            <div
              className="bg-seed seed-shape drop-shadow-xs"
              style={{
                width: `${p.size * 0.7}px`,
                height: `${p.size * 1.2}px`,
              }}
            />
          )}

          {p.type === 'bubble' && (
            <div
              className="rounded-full shadow-xs"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color || '#F04C63',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
