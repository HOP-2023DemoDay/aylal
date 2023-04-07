/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamilys: {
        Poppins: 'Poppins, sans-serif',
      },
      colors: {
        GreenText: '#295943',
        DarkText: '#3D3E48',
        GrayText: '#868383',
        button:'#43B97F'
      },
    },
  },
  plugins: [],
}