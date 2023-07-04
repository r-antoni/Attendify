/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#F0F4FB",
        secondary: "#4154F1",
        title: "#012970", 
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}

