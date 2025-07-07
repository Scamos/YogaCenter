// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true, //Specificato il rendering mode
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  supabase:{
    redirect: false
  }
})