/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

