import type { Config } from 'tailwindcss';

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-1turn)',
          },
        },
      },
      animation: {
        moveUp: 'moveUp 10s linear infinite',
        moveUp3: 'moveUp 3s linear infinite',
        moveUp5: 'moveUp 5s linear infinite',
        moveUp7: 'moveUp 7s linear infinite',
        moveRight: 'moveRight 3s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
