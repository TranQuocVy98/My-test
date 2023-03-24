/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                hiragino: ["Hiragino-Sans-GB-W3", "sans-serif"],
                robert: ["Robert", "sans-serif"],
            },
            colors: {
                primary: "#3f51b5",
                secondary: "#34231F",
                accent: "#101828",
                textDate: "#99908D",
                background: "#EBE9E9",
                info: "#101828",
                brand: "#667085",
                bgitems: "#F2F4F7",
            },
        },
    },
    plugins: [],
};
