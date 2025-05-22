/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_gray: "#1C1C1C",
        light_gray: "#A6A6A6",
        beige: "#F1E9DB",
        grass: "#4C6A51",
        highlight: "#9CB79C",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        finger: ['"Finger Paint"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        rubikWet: ['"Rubik Wet Paint"', "cursive"],
        patrick: ['"Patrick Hand"', "cursive"],
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
