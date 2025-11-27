/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-white': '#FDF7E3', // Warm cream base
        'neon-blue': '#0EA5E9',   // Logo-inspired blue
        'black-text': '#111827',  // Near-black for text
      },
    },
  },
  plugins: [],
}