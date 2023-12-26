/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          primary:'#1a1714',
          secondary:'#c6c6c6',
          light:'#2c2c2c'
        },
        orange:{
          primary:'#b56111'
        }
      }
    },
  },
  plugins: [],
}

