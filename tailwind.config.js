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
            spacing: {
                '679': '42.4375rem',
                '709': '44.3125rem',

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