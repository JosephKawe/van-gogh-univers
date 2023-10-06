/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : "#FFFBE3",
        'mainBlue' : "#143D71",
        'mainYellow' : '#f0bc28'
      },
      backgroundImage: {
        'mainBg' : 'url(./../src/Assets/bg_noite-estrelada.jpg)',
        'paintingBg' : 'url(./../src/Assets/bg_noite-rodano.jpg)',
        'aboutBg' : 'url(./../src/Assets/ABOUT_Vincent_Van_Gogh-blur.jpg)'
      },
      fontFamily:{
        josefin: 'Josefin Sans'
      },
      transitionDuration: {
        '2000' : '2000ms'
      },
      width: {
        'cardHover' : "8.5em"
      },
      translate: {
        'cardHover' : "300%"
      },
      screen: {
        '4k' : '2560px'
      }
    },
  },
  plugins: [],
})

