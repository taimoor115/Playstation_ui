/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {},
  theme: {
    screens: {
      xs: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ...defaultTheme.screens,
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
