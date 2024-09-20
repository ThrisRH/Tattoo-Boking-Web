/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Page
    "./src/components/pages/Home/**/*.{js,jsx,ts,tsx}",
    "./src/components/pages/Booking/**/*.{js,jsx,ts,tsx}",

    // Items
    "./src/components/Home/HeroSection.{js,jsx,ts,tsx}",
    "./src/components/items/**/*.{js,jsx,ts,tsx}",
    // Layouts
    "./src/components/Header.{js,jsx,ts,tsx}",
    "./src/components/HeaderJustLogo.{js,jsx,ts,tsx}",
    "./src/components/Footer.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "480px",

        tablet: "834px",

        desktop: "1280px",
      },

      colors: {
        primary: "#FEAE3F",
        background: "#1C1C1C",
        blackIcon: "#1C1C1C",
        whiteIcon: "#3B82F6",
      },
    },
  },
  plugins: [],
};
