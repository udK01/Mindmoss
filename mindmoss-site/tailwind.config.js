/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_gray: "#1C1C1C",
        light_gray: "#A6A6A6",
        beige: "#AD7E4E", // #F1E9DB
        grass: "#2e4f2e", // #4C6A51
        highlight: "#9CB79C",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        finger: ['"Finger Paint"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        rubikWet: ['"Rubik Wet Paint"', "cursive"],
        patrick: ['"Patrick Hand"', "cursive"],
        pressStart: ['"Press Start 2P"', "cursive"],
        fredoka: ['"Fredoka One"', "cursive"],
      },
      screens: {
        "2xs": "320px",
        xs: "480px",
        sm: "620px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1700px",
      },
    },
  },
  plugins: [],
};
