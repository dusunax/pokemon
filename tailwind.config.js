/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f96062",
        "light-blue": "#ebf8f9",
        "light-pale-blue": "ebf3f3",
      },
      backgroundColor: {
        "light-pale-blue": "ebf3f3",
      },
      maxHeight: {
        common: "50rem",
      },
      margin: {
        common: "8rem 0 0 0",
      },
      padding: {
        common: "8rem 0 0 0",
      },
      fontSize: {
        xxs: "10px",
      },
      screens: {
        xs: "500px",
        xxs: "360px",
      },
      boxShadow: {
        "inner-custom": "inset 2px 10px 10px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "": "",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
