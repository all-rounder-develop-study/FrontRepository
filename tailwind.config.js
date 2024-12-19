/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"]
      },
      screens: {
        sm: "500px",
        md: "744px",
        // => @media (min-width: 744px) { ... }
        xl: "1200px"
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        white: {
          100: "#FFFFFF"
        },
        blue: {
          100: "#F7F9FB",
          200: "#E2E8F0",
          300: "#64748B",
          400: "#e8e8e8",
          500: "#0F172A" //남색
        },
        gray: {
          50: "#FBFBFF", //gray00
          100: "#F2F2F7", //gray01
          200: "#E5E5EA", //gray02
          300: "#D1D1D6", //gray03
          400: "#C7C7CC", //gray04
          500: "#AEAEB2", //gray05
          600: "#8E8E93", //gray06
          700: "#8E8E93", //gray07
          800: "#636366" //gray08
        },
        bg: {
          100: "#F1F5F9"
        },
        red: {
          100: "#EF4444"
        }
      }
    }
  },
  plugins: []
};
