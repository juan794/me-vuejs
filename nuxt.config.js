export default {
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    buildModules: [
        '@nuxt/postcss8',
    ],
    css: [
        '@/assets/css/main.css',
    ],
}