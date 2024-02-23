/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-fast': 'ping 900ms cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily: {
        display: ['"Futura Md BT"', 'sans-serif'],
        link: ['"Futura"', 'sans-serif'],
        logoPart1: ['"Futura Lt BT"', 'sans-serif'],
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
        'spindle': {
          '50': '#f3f6fb',
          '100': '#e3ebf6',
          '200': '#ceddef',
          '300': '#b9cfe8',
          '400': '#85a9d5',
          '500': '#678dca',
          '600': '#5475bc',
          '700': '#4963ac',
          '800': '#40528d',
          '900': '#384670',
          '950': '#262d45',
      },      
      'bermuda': {
        '50': '#f3faf8',
        '100': '#d6f1e7',
        '200': '#ace3d0',
        '300': '#91d5c1',
        '400': '#50b198',
        '500': '#36967e',
        '600': '#297866',
        '700': '#256054',
        '800': '#214e45',
        '900': '#1f423a',
        '950': '#0d2622',
      },
      'fountain-blue': {
        '50': '#f0fbfa',
        '100': '#d8f5f5',
        '200': '#b5eaec',
        '300': '#83d9dd',
        '400': '#3ab7bf',
        '500': '#2da3ad',
        '600': '#288592',
        '700': '#266c78',
        '800': '#275963',
        '900': '#254a54',
        '950': '#133139',
        },    
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