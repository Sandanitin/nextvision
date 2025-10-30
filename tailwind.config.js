/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005B9E',      // Primary Blue
          sky: '#2FA9E0',       // Accent Sky Blue
          mid: '#007FCC',       // Mid Blue
          dark: '#003D66',      // Dark Navy
          gray: '#A7A7A7',      // Light Gray
          white: '#FFFFFF',     // White
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
