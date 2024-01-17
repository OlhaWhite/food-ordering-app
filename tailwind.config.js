/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        dark: '#2B2E4A',
        tomato: '#E84545',
        maroon: '#903749',
        purple: '#53354A'
      }
    },
  },
  plugins: [],
}

