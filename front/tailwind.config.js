// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Poppins: 'Poppins, sans-serif',
//       },
//     },
//   },
//   plugins: [],
// };

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
      screens: {
        smm: { min: "0px", max: "639px" },
        smmsm: { min: "0px", max: "767px" },
        smmsmm: { min: "320px", max: "375px" },
        sm: { min: "640px", max: "767px" },  
        md: { min: "768px", max: "1024px" },
        smmmd: { min: "640px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        Txl: { min: "1536px" },
      },
    },
  },
  plugins: [],
};
