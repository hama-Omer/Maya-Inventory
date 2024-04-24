/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-body-background": "url('/img/bg-body-background.jpg')",
        "blue-maya": "#183153",
        "gray-maya": "#C3C6D1",
      },
    },
  },
  plugins: [],
};
