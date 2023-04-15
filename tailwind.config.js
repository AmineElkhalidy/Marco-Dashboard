/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#000223",
        bgColor: "#ECEFF5",
        inputBgColor: "#F1F4FA",
        placeholderColor: "#788B9A",
      },
    },
  },
  plugins: [],
};
