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
    extend: {
      navLink: {
        "&::after": {
          content: "''",
          display: "block",
          width: "100%",
          height: "2px",
          backgroundColor: "black",
          transform: "scaleX(0)",
          transition: "transform 250ms ease-in-out",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
        },
      },
    },
  },

  plugins: [],
};
