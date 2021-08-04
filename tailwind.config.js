module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        open: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        blue: {
          secondary: "#8ECAE6",
          primary: "#219EBC",
          strong: "#023047",
        },
        yellow: {
          secondary: "#FFB703",
          primary: "#FB8500",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
