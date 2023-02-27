/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
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
                bigger: "32rem",
            },
        },
    },
    plugins: [],
}
