/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'image': 'image .7s forwards ',
        'md-image': 'md-image .7s forwards ',
        "spining-b-a": "spin 2s infinite alternate",
        "content-appear-l-r": "content-appear-l-r 1s forwards",
        "content-appear-r-l": "content-appear-r-l 1s forwards",
        "content-appear-b-t": "content-appear-b-t 1s forwards",
        "content-appear-t-b": "content-appear-t-b 1s forwards",
        about: "about .7s ease-in-out forwards",
      },
      keyframes: {
        'image': {
          "0%": {
            opacity: 0,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(-50%)',
          }
        },
        'md-image': {
          "0%": {
            opacity: 0,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(-50%)',
          }
        },
        'spin': {
          "0% ,100%": {
            transform: 'rotate(0deg) scale(1) ',
            transformOrigin: 'center center'
          },
          '50%': {
            transform: 'rotate(180deg) scale(.8) ',
            transformOrigin: 'center center'
          }
        },
        'content-appear-r-l': {
          "0%": {
            opacity: 0,
            transform: 'translateX(50%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)',
          }
        },

        'content-appear-l-r': {
          "0%": {
            opacity: 0,
            transform: 'translateX(-50%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)',
          }
        },
        'about': {
          "0%": {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          }
        },
        'content-appear-b-t': {
          "0%": {
            opacity: 0,
            transform: 'translateY(50%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          }
        },
        'content-appear-t-b': {
          "0%": {
            opacity: 0,
            transform: 'translateY(-50%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          }
        },
      }
    },
  },
  plugins: [],
}