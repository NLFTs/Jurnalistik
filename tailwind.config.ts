/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{vue,js,ts}",
        "./content/**/*.md"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
