const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
      'wd': { 'raw': '(max-height: 750px) and (min-width: 1024px)' },
      'sh': { 'raw': '(max-height: 450px)'},
      'vsh': { 'raw': '(max-height: 325px)'}
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}