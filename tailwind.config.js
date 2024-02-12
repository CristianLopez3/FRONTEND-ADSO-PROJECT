/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff8700",
        secondary: "#3D3B40",
        third: "#ff8710"
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

