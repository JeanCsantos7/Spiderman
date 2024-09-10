/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        spider: ["spider font"],
        mukta: ["Mukta", "sans-serif"]
       
      },

    

    },

    animation: {
      float: "float 3s ease-in-out infinite;"
    },



 

   
  },
  plugins: [],
}