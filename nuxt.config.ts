// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: "2025-05-15",
    devtools: { enabled: false },
    css: ["~/assets/css/main.css"],
    // vite: {
    //   plugins: [tailwindcss()],
    // },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxtjs/google-fonts",
        "@nuxt/ui",
        "@nuxt/icon",
        "@nuxtjs/tailwindcss",
    ],
    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700],
        },
        display: "swap",
        inject: true,
        download: false, // set to false if you want to load from Google CDN instead
    },
});
