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
        MediumDarkText: "#333333",
        GrayText: "#868383",
        MediumGrayText: "#696969",
        SmallGrayText: "#666666",
        Button: "#43B97F",
        Black: "#141414",
        White: "#F8F8F8",
      },
      screens: {
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
