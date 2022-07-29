/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
      "image-appear":"appear 3s linear"
      },
      keyframes:{
        appear:{
          "0%":{
            transform: 'rotateY(360deg)'
          },
          '100%':{
            transform: 'rotateY(0deg)'

          }
        }
      }
    },
  },
  plugins: [],
}
