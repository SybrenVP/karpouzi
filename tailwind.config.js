/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF6F0',       // Main Warm Bisque Cream background
        surface: '#FFFFFF',      // Clean Porcelain Card surface
        watermelon: {
          DEFAULT: '#F04C63',    // Juicy Watermelon Flesh Red/Pink
          hover: '#D7364D',
          light: '#FFF0F3',
          dark: '#B82035',
        },
        rind: {
          DEFAULT: '#228653',    // Fresh Melon Rind Emerald Green
          hover: '#196B41',
          light: '#E8F8F0',
          dark: '#114D2E',
        },
        mint: {
          DEFAULT: '#74C69D',    // Inner Rind Soft Mint
          light: '#D8F3DC',
          accent: '#A3EBB1',
        },
        seed: {
          DEFAULT: '#1F2421',    // Watermelon Seed Charcoal
          light: '#3A423D',
        },
        sunshine: {
          DEFAULT: '#FED053',     // Warm Lemon Sunshine
          light: '#FEF9C3',
        },
        blossom: {
          DEFAULT: '#FFADC6',     // Sweet Melon Blossom Pink
          light: '#FFF0F5',
        },
        lavender: {
          DEFAULT: '#D8B4E8',     // Pastel Lilac accent
          light: '#F5EDFA',
        },
        // Backward-compatible color aliases
        coral: {
          DEFAULT: '#F04C63',
          hover: '#D7364D',
          light: '#FFF0F3',
        },
        cobalt: {
          DEFAULT: '#228653',
          hover: '#196B41',
          light: '#E8F8F0',
        },
        clayDark: '#1F2421',     // High-contrast seed charcoal
        graphite: '#525B62',     // Accessible secondary body text
      },
      fontFamily: {
        fredoka: ['Fredoka', 'cursive', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(4deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  },
  plugins: [],
}
