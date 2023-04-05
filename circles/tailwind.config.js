/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  extend: {
    colors: {
      'babyblue': '#BAE5F3'
    }
    
  },
  plugins: [require("daisyui")],
};
