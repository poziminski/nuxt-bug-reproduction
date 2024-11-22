// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },


  devServer: {
    port: 3002,
    host: '0.0.0.0'
  },

  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})