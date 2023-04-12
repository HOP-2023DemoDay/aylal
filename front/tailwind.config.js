/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fonts: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        GreenText: "#295943",
        DarkText: "#3D3E48",
        GrayText: "#868383",
        MediumGrayText: "#696969",
        Button: "#43B97F",
        Black: "#141414",
      },
      images: {
        'zur': "url('./src/img/zurag1.svg')",
      }
    },
  },
  plugins: [],
};
