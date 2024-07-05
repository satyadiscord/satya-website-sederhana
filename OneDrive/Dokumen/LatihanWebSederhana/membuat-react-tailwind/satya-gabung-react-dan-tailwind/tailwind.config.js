/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#49e659",
      },
      fontFamily: {
        arial: ["arial", "sans-serif"],
      },
      textShadow: {
        costume: "0px 4px 4px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-custom-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
