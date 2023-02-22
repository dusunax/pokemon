/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f96062",
      },
      maxHeight: {
        common: "50rem",
      },
      margin: {
        common: "6rem 0 0 0",
      },
      fontSize: {
        xxs: "10px",
      },
      screens: {
        xs: "500px",
        xxs: "360px",
      },
      boxShadow: {
        innerCustom: "inset 2px 10px 10px rgba(155,0,0,0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
