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
        gray: {
          100: "#fcfcfc", //gray01
          200: "#f9f9f9", //gray02
          300: "#f0f0f0", //gray03
          400: "#e8e8e8", //gray04
          500: "#e0e0e0", //gray05
          600: "#d9d9d9", //gray06
          700: "#8E8E93", //gray07
          800: "#cecece", //gray08
          900: "#8d8d8d", //gray09
          1000: "#838383" //gray10
        },
        bg: {
          100: "#E2E3E5"
        }
      }
    }
  },
  plugins: []
};
