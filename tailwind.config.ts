/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "0rem",
          // "2xl": "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          // "2xl": "1536px",
        },
      },
      fontFamily: {
        geistmono: ['var(--font-geist-mono)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
