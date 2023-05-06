const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["OxyVietNam", ...defaultTheme.fontFamily.sans],
        sansBlack: ["OxyVietNamBlack", ...defaultTheme.fontFamily.sans],
        primary: ["GodWorld", ...defaultTheme.fontFamily.sans],
        evilEmpire: ["EvilEmpire", ...defaultTheme.fontFamily.sans],
        georama: ["Georama", ...defaultTheme.fontFamily.sans],
        playToEarnDetails: ["GemunuLibre", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        blue: "#00FFFC",
        yellow: "#FDD60A",
        pink: "#FF04D7",
        // inputText: "#fff",
        // cardBg: "#fff",
      },
      gridTemplateColumns: {
        2575: "25fr 75fr",
        3565: "35fr 65fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-question-mark")],
}
