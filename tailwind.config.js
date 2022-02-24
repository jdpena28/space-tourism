module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Bellefair", "serif"],
      secondary: ["Barlow Condensed", "sans-serif"],
      tertiary: ["Barlow", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: "#0B0D17",
        highlight: "#D0D6F9",
      },
      fontSize: {
        heading1: "9.375rem",
        heading2: "6.25rem",
        heading3: "3.5rem",
        heading4: "2rem",
        heading5: [
          "1.75rem",
          {
            letterSpacing: "0.297rem",
          },
        ],
        subheading1: "1.75rem",
        subheading2: [
          "0.875rem",
          {
            letterSpacing: "0.147rem",
          },
        ],
        navText: [
          "1rem",
          {
            letterSpacing: ".169rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
