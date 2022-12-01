/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        'fsg': "#3e6fb4",
        'main': "#303033",
        'dark': "#111113",
        'light': "#ABABAD",
        "map-green": "#4A7B3D",
        "map-red": "#A80000",
        "map-purple": "#7030A0",
        "map-gray": "#7F7F7F",
        "map-orange": "#7030A0",
        "map-blue": "#406BB8"
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '2/3': '66%',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  content: ["./index.html",'./src/**/*.{svelte, js, ts}'], // for unused CSS
  variants: {
    extend: {

    },
  }
}