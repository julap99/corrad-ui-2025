// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@formkit/nuxt",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: 0 }],
    viewer: false,
  },
  fonts: {
    priority: ["google"],
    provider: "google",
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `(function() {
            try {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default');
              
              if (theme !== 'default') {
                document.documentElement.classList.add('theme-' + theme);
              }
              document.documentElement.style.colorScheme = theme;
            } catch (e) {}
          })()`,
          type: "text/javascript",
        },
      ],
    },
  },
});