/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#e71c1f', light: '#ff4a4d', dark: '#b81518' },
      },
    },
  },
  plugins: [],
};
