/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pomodoro': '#f87070',
        'shortbreak': '#70f3f8',
        'longbreak': '#d881f8',
      },
    },
  },
  plugins: [],
}
