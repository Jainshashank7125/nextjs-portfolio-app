/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F3F4F6',
          300: '#D1D5DB',
          600: '#4B5563',
        },
      },
    },
  },
  plugins: [],
};