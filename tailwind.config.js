const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1440px',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        black: `#040404`,
        grey: `#A8A8A8`,
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
