/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        'fsg': "#3e6fb4"
      }
    },
  },
  content: ["./index.html",'./src/**/*.{svelte, js, ts}'], // for unused CSS
  variants: {
    extend: {

    },
  }
}