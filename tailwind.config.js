/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'good': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

