const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        fontFamily: {
            sans: ["'Fira Sans'", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                laurel: {
                    DEFAULT: "#C4C7C2",
                    50: "#FEFEFE",
                    100: "#F2F3F2",
                    200: "#DBDDDA",
                    300: "#C4C7C2",
                    400: "#A5A9A2",
                    500: "#868C82",
                    600: "#686D64",
                    700: "#494D47",
                    800: "#2B2D2A",
                    900: "#121311",
                },
            },
        },
    },
    plugins: [],
};
