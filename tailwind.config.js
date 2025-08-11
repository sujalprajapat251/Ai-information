/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themedark: "#9D00FF",
        themelight: "#FFFFFF80",
        themeblack: "#141414",
      },
    },
  },
  plugins: [],
}