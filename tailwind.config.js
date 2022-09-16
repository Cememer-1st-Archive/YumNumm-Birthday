/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,tsx,jsx}","./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
}
