/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "20rem",
      md: "39rem",
      lg: "52rem",
      xl: "64rem",
    },
    extend: {},
  },

  plugins: [],
};
