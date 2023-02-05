/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      maxHeight: {
        custom: "50rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
