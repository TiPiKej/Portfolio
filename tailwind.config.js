const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea0f1e",
        secondary: colors.white,
      },
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
