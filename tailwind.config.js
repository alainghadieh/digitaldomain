/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['"Big Shoulders Display"', 'sans-serif'],
        // 'display': ['Oswald'],
        // 'sans': ['"Plus Jakarta Sans"', 'sans-serif']
      },
      textColor: {
        'primary': '#91d5c1',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      colors: {
        'green': '#91d5c1',
      },
    },
  },
  plugins: [],
}