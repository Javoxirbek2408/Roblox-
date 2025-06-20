// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],

    
}

module.exports = {
    theme: {
      extend: {
        boxShadow: {
          'custom-gold': '-4px -1px 42px 20px rgba(180, 161, 24, 0.34)',
        },
      },
    },
  }