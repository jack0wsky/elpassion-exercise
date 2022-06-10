/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/views/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        grey: {
          800: "rgba(36, 41, 47, 1)",
          200: "rgba(111, 119, 129, 1)",
          100: "rgba(196, 196, 196, 1)",
        },
        "light-grey": "rgba(208, 215, 222, 1)",
        "grey-disabled": "rgba(141, 149, 159, 1)",
        primary: "rgba(22, 108, 215, 1)",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
