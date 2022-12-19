const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        sharp: "0.5rem 0.5rem black",
        "sharp-sm": "0.25rem 0.25rem black",
      },
      colors: {
        laurel: {
          DEFAULT: "#C4C7C2",
          50: "#FEFEFE",
          100: "#F2F3F2",
          200: "#DBDDDA",
          300: "#C4C7C2",
          400: "#A5A9A2",
          500: "#868C82",
          600: "#686D64",
          700: "#494D47",
          800: "#2B2D2A",
          900: "#121311",
        },
      },
      animation: {
        wiggle: "wiggle 3s linear alternate infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-2deg)" },
        },
      },
    },
  },
  plugins: [],
};
