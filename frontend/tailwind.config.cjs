/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        'fsg': "#3e6fb4"
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