const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

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
      backgroundImage: {
        'paulo-flores02': "url('/src/assets/images/pauloflores_02.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}

