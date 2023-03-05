/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        custom: "853px",
        new: "1644",
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
      backgroundImage: {
        "main-cover": "url('media/cover.jpg')",
      },
      colors: {
        "brand-color-red": "#E70A1B",
        "brand-color-light-red": "#ffe9e9",
        "brand-color-aqua": "#2B9CE1",
        "brand-color-light-aqua": "#d7f0ff",
      },
      width: {
        "mid-largerwidth": "32rem",
        "mid-largerheight": "40rem",
      },
    },
  },
  plugins: [],
}
