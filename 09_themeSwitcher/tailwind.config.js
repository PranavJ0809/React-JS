/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // we also have to add this fuctionality of tailwind 
  // to run this 
  darkMode : "class",

  theme: {
    extend: {},
  },
  plugins: [],
}

