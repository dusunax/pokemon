/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        common: "50rem",
      },
      margin: {
        common: "4rem 0 0 0",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
