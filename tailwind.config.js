/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    fontFamily: {
      sans: ['"Big Shoulders Display"', 'sans-serif'],
    },
    extend: {
      textColor: {
        'primary': '#91d5c1',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
    },
  },
  plugins: [],
}