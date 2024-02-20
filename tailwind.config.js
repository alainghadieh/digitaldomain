/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        'sans': ['"Cairo"', 'sans-serif']
      },
      textColor: {
        'primary': '#91d5c1',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      textShadow: {
        sm: '-1px -3px 1px rgb(0,0,0,40%)',
        md: '0px 8px 13px rgba(0,0,0, 40%)',
        lg: '-1px -3px 1px rgb(0,0,0,40%)',
      },
      colors: {
        'green': '#91d5c1',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}