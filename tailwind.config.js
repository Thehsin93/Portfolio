/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        beige:{
          50:'#EDEDE7',
          100:'#E0DCD4',
          200:'#fce1c6',
          300:'#f9c588'
        }
      }
    },
  },
  plugins: [],
}

