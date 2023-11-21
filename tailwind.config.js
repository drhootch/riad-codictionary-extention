/** @type {import('tailwindcss').Config} */
export default {
    corePlugins: {
      preflight: false,
    },
    important: "#riadh_app",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
