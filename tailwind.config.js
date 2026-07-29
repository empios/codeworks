/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="terminal"]'],
  theme: {
    extend: {
      colors: {
        aubergine: {
          10: '#F5EAF1',
          20: '#E0BFD6',
          30: '#B98AAA',
          40: '#8E5279',
          50: '#77216F',
          60: '#5A0F4D',
          70: '#44032E',
          80: '#2C001E',
          90: '#1A0011',
          100: '#0D0008',
        },
        ubuntuOrange: {
          10: '#FFEFE6',
          20: '#FFD4BD',
          30: '#FFAE85',
          40: '#FF7848',
          50: '#E95420',
          60: '#C8420A',
          70: '#A8370A',
          80: '#7E2807',
        },
        pgWarm: {
          10: '#FAF7F4',
          20: '#F2EEE9',
          30: '#E8E2DA',
          40: '#DCD4CA',
          50: '#BFB5A8',
          60: '#8E867E',
          70: '#6B6259',
          80: '#4A433C',
          100: '#1B1612',
        }
      },
      fontFamily: {
        sans: ['"Ubuntu Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Ubuntu Sans Mono"', 'monospace'],
      },
      boxShadow: {
        'pg-sm': '0 1px 2px rgba(44, 0, 30, 0.06), 0 1px 1px rgba(44, 0, 30, 0.04)',
        'pg-md': '0 4px 12px rgba(44, 0, 30, 0.12), 0 1px 3px rgba(44, 0, 30, 0.08)',
        'pg-glow': '0 0 25px rgba(233, 84, 32, 0.25)',
      }
    },
  },
  plugins: [],
}
