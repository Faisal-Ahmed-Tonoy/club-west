const colors = require("tailwindcss/colors");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: true,
            },
            screens: {
                'xm': '319px',
                // => @media (min-width: 320px) { ... }


            },
            colors: {
                // primary: defaultTheme.colors.green,
                treasuredTeal: "#65BBC8",
                indigoDye: "#213B5E",
                middleBlue: "#65BBC8",
            },
            spacing: {
                '679': '42.4375rem',
                '709': '44.3125rem',
                '1015': '63.4375rem',
                '889': '55.56rem',
                '1920': "120rem",
                '512': "32rem",
                '565': "35rem",
                '480': "30rem",
                '1920': "120rem"

            },
            fontSize: {

                '2xxl': '1.687rem',

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