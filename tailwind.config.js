const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        fontFamily: {
            sans: ["'Fira Sans'", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            boxShadow: {
                hard: "4px 4px black",
            },
        },
    },
    plugins: [],
};
