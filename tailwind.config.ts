/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app.vue",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
