/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        clear: "#F0EFEF",
        darkOrange: "#F28E05",
        mediumRisk: "#F2B705",
        confirm: "#808080",
      },
    },
  },
};
