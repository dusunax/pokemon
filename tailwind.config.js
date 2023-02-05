/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
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
