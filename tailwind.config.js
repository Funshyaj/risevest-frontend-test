/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#07969E",
        lightTeal: "#40BBC3",
        lighterTeal: "#A0DDE2",
        fadedTeal: "#ECFEFE",
        fadedPurple: "#F6F2FF",
        fadedOrange: "#FFF4F0",
        black: "#2D2D2D",
        grayWhite: "#7B8DA8",
      },
      boxShadow: {
        custom: "0px 2px 10px 3px rgba(64,187,195,0.23)",
      },
      fontSize: {
        xxs: "10px",
      },
      screens: {
        xs: "360px",
      },
      keyframes: {
        spinStop: {
          "0%": { transform: "rotate(0deg)" },
          "95%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        spinStop: "spinStop 5s linear infinite",
      },
    },
  },
  plugins: [],
};
