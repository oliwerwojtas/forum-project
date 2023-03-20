/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      delay: {
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        transitionProperty: "border-bottom",
        transitionDuration: "0.3s",
        transitionDelay: "0.1s",
      },
    },
  },
  plugins: [],
};
