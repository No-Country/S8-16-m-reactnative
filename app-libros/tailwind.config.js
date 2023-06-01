/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bookYellow: '#FF9A1F',
        bookBlack: '#171719',
        bookGrey: '#4C4C4C' ,
        bookWhite: '#FFFFFF',
        background:'#171719',
        bookDarkGrey: "#222222"
      }
    },
  },
  plugins: [],
}

