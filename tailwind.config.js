const colors = require("tailwindcss/colors");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // primary: defaultTheme.colors.green,
                treasuredTeal: "#65BBC8",
                indigoDye: "#213B5E",
                middleBlue: "#65BBC8",
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`,
        ],
    },
};
const defaultTheme = require("tailwindcss/defaultTheme");