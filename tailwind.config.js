/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
      "image-appear":"appear 1s forwards",
      "md-image-appear":"appear-md 1s forwards"
      },
      keyframes:{
        appear:{
          "0%":{
            transform: 'rotateX(180deg) translateY(-100%)'
          },
          '100%':{
            transform: 'rotateX(0deg)  translateY(-50%)'

          }
        },
        'appear-md':{
          "0%":{
            transform: 'rotateY(180deg) translateX(-100%)'
          },
          '100%':{
            transform: 'rotateY(0deg) translateX(-50%)'

          }
        }
      }
    },
  },
  plugins: [],
}
