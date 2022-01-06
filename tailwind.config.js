const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#ff4800',
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'abril': ['"Abril Fatface"', 'cursive'],
      'didact gothic': ['"Didact Gothic', 'sans-serif'],
      'Montserrat': ['"Montserrat"', 'sans-serif'],
      'Philosopher': ['"Philosopher"', 'sans-serif'],
      'Quicksand': ['"Quicksand"', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      // animation: ['motion-safe'],
    },
  },
  plugins: [],
}
