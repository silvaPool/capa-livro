/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        height: {
          '350': '350px',
          '800': '800px',
        },
        width: {
          '350': '350px',
        },
        fontSize: {
          xs: '5rem',
          sm: '2rem',
        },
        fontFamily: {
         custom: ['cresper', 'cursive'],
        },
    },
  },
  plugins: [],
}

