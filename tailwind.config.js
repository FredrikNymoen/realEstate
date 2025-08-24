/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:{
            default: "#1d4ed8", // eksempel på custom farge
            
        } 
      },
    },
  },
  plugins: [],
};
