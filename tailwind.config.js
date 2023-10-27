/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'VividRed': '#EB1D36',
        'Gray65': '#A6A6A6',
      },
      fontFamily: {
        poppins: 'Poppins',
        neue: 'Bebas Neue',
      },
    },
  },
  plugins: [],
}

