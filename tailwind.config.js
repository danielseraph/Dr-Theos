/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
        },
        emerald: {
          DEFAULT: '#0F8B6D',
        },
        gold: {
          DEFAULT: '#D6A84F',
        },
        offwhite: {
          DEFAULT: '#F7F5EF',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#17212B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
