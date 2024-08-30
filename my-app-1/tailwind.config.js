/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM Plex Mono'],
      },
      colors: {
        red: '#FF537A',
        mint: '#00FFB5',
        sea: '#008FFF',
        111: '#111111',
      },
      fontSize: {
        xxs: '0.5rem'
      },
    },

  },
  plugins: [],
}

