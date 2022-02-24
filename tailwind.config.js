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
        primary: colors.white,
        secondary: "#ea0f1e",
      },
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
