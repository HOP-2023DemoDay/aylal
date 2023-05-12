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
      keyframes: {
        Left: {
          '0%': { "padding-left": '0vw' },
          '100%': { "padding-left": '100vw' },
        },
        Right: {
          '0%': { "padding-right": '0vw' },
          '100%': { "padding-right": '100vw' },
        },
        CompLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        CompRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'AnimaPaddLeft': 'Left 20s linear infinite',
        'AnimaPaddRight': 'Right 20s linear infinite',
        'AnimaMarginLeft': 'CompLeft 20s linear infinite',
        'AnimaMarginRight': 'CompRight 20s linear infinite',
      },
    },
  },
  plugins: [],
};
