/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "system-ui"],
      serif: ["Ubuntu", "Georgia"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px -12px 191px -43px rgba(0,0,0,0.75)",
      },
      colors: {
        primary: "#ff8700",
        secondary: "#3D3B40",
        grayLight: "rgb(242 243 248)",
        third: "#ff8710",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
