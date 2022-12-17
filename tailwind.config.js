/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        orange: {
          soft: 'hsl(35, 77%, 62%)'
        },
        red: {
          soft: 'hsl(5, 85%, 63%)',
          softer: 'hsl(5, 85%, 67%)',
          dark: 'hsl(5, 85%, 59%)'
        },
        blue: {
          dark: 'hsl(240, 100%, 5%)',
          seeThrough: 'hsla(236, 13%, 12%, 0.559)'
        }
      }
    },
  },
  plugins: [],
}
