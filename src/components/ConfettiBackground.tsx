import React from 'react';

interface SeedData {
  id: number;
  top: string;
  left: string;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  duration: string;
  delay: string;
}

// Sparsely and organically scattered seeds across the entire page
const SEEDS: SeedData[] = [
  // Section: Top & Hero area (0% - 25%)
  { id: 1, top: '3%', left: '4%', width: 10, height: 16, rotation: 24, opacity: 0.22, duration: '9s', delay: '0s' },
  { id: 2, top: '7%', left: '93%', width: 11, height: 18, rotation: -38, opacity: 0.25, duration: '11s', delay: '1.2s' },
  { id: 3, top: '13%', left: '11%', width: 9, height: 14, rotation: 78, opacity: 0.18, duration: '8s', delay: '2.5s' },
  { id: 4, top: '18%', left: '88%', width: 12, height: 19, rotation: 140, opacity: 0.22, duration: '10.5s', delay: '0.8s' },
  { id: 5, top: '23%', left: '3%', width: 10, height: 16, rotation: -65, opacity: 0.2, duration: '9.5s', delay: '3.1s' },

  // Section: About Us area (26% - 50%)
  { id: 6, top: '28%', left: '95%', width: 9, height: 15, rotation: 42, opacity: 0.18, duration: '8.5s', delay: '1.5s' },
  { id: 7, top: '34%', left: '6%', width: 11, height: 17, rotation: -110, opacity: 0.22, duration: '10s', delay: '2.8s' },
  { id: 8, top: '39%', left: '92%', width: 10, height: 16, rotation: 68, opacity: 0.2, duration: '9s', delay: '0.4s' },
  { id: 9, top: '45%', left: '4%', width: 12, height: 19, rotation: 12, opacity: 0.24, duration: '11.5s', delay: '1.9s' },
  { id: 10, top: '49%', left: '89%', width: 9, height: 14, rotation: -82, opacity: 0.18, duration: '8s', delay: '3.3s' },

  // Section: Events & Workshops area (51% - 75%)
  { id: 11, top: '54%', left: '94%', width: 11, height: 17, rotation: -45, opacity: 0.2, duration: '10s', delay: '2.2s' },
  { id: 12, top: '60%', left: '5%', width: 10, height: 16, rotation: 115, opacity: 0.22, duration: '9.5s', delay: '0.6s' },
  { id: 13, top: '66%', left: '91%', width: 12, height: 19, rotation: -25, opacity: 0.25, duration: '12s', delay: '1.8s' },
  { id: 14, top: '72%', left: '4%', width: 9, height: 14, rotation: 50, opacity: 0.18, duration: '8.5s', delay: '3s' },
  { id: 15, top: '76%', left: '95%', width: 11, height: 17, rotation: -135, opacity: 0.22, duration: '10.5s', delay: '2s' },

  // Section: Contact & Footer area (76% - 98%)
  { id: 16, top: '82%', left: '3%', width: 12, height: 18, rotation: 35, opacity: 0.23, duration: '9s', delay: '0.9s' },
  { id: 17, top: '87%', left: '93%', width: 10, height: 15, rotation: -50, opacity: 0.2, duration: '11s', delay: '2.7s' },
  { id: 18, top: '92%', left: '7%', width: 11, height: 17, rotation: 98, opacity: 0.21, duration: '8.5s', delay: '1.3s' },
  { id: 19, top: '97%', left: '90%', width: 12, height: 19, rotation: -88, opacity: 0.24, duration: '11.5s', delay: '0.3s' },
];

export const WatermelonSeedsBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {SEEDS.map((seed) => (
        <div
          key={seed.id}
          className="absolute animate-seed-float will-change-transform"
          style={{
            top: seed.top,
            left: seed.left,
            width: `${seed.width}px`,
            height: `${seed.height}px`,
            opacity: seed.opacity,
            ['--seed-rot' as string]: `${seed.rotation}deg`,
            ['--seed-duration' as string]: seed.duration,
            ['--seed-delay' as string]: seed.delay,
          }}
        >
          {/* Teardrop Watermelon Seed SVG with subtle glazed clay highlight */}
          <svg
            viewBox="0 0 20 30"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Seed Charcoal Body */}
            <path
              d="M10 2 C13.5 7.5 17.5 14 17 19.5 C16.5 24.5 13.5 28 10 28 C6.5 28 3.5 24.5 3 19.5 C2.5 14 6.5 7.5 10 2 Z"
              fill="#1F2421"
            />
            {/* Subtle inner curve highlight */}
            <path
              d="M8 8 C10 11.5 11.5 15 11.2 18 C11 20 10.2 21.2 9 22"
              stroke="rgba(255, 255, 255, 0.28)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

// Aliases for compatibility
export const ConfettiBackground = WatermelonSeedsBackground;
export default WatermelonSeedsBackground;
