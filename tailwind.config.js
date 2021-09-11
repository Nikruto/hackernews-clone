module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#32323f",
        darker: "#22222b",
        darkest: "#17171e",
      },

      fontFamily: {
        poppins: ["Poppins", "Segoe UI", "Arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
