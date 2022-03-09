const textColors = {
  "primary": "#F4F1DE",
  "aux": "#549074",
};
const bgColors = {
  "secondary": "#F2CC8F",
  "primary": "#2D4B4D",
};

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{ts,tsx}"],
  theme: {
    extend: {

      colors: {
        ...textColors
      },
      backgroundColor: {
        ...bgColors
      },
    },
  },
  plugins: [],
};
