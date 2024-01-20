/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgMain: "#FFF3F3",
      bgHeader: "rgba(255, 114, 13, 1)",
      bgBtn: "rgba(255, 114, 13, 0.85)",
      bgItem: "rgba(255, 114, 13, 0.41)",
      bgFooter: "rgba(74, 72, 72, 1)",
      white: "rgba(255, 255, 255, 1)",
      cardBorder: "rgba(255, 114, 13, 0.83)",
    },
    fontFamily: {
      Inter: ["Inter"],
      Righteous: ["Righteous"],
    },
  },
  plugins: [],
};
