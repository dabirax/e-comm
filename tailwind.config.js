/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/**/*.jsx", "index.html", "./src/**/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandWhite: "#eeeeee",
      },
      fontFamily: {
        Sans: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
