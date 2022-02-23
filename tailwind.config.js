module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Bellefair", "serif"],
      secondary: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0B0D17",
        highlight: "D0D6F9",
      },
      fontSize: {
        heading1: "150px",
        heading2: "100px",
        heading3: "56px",
        heading4: "32px",
        heading5: [
          "28px",
          {
            letterSpacing: "4.75px",
          },
        ],
        subheading1: "28px",
        subheading2: [
          "14px",
          {
            letterSpacing: "2.35px",
          },
        ],
        navText: [
          "16px",
          {
            letterSpacing: "2.7px",
          },
        ],
      },
    },
  },
  plugins: [],
};
