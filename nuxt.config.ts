import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],

  typescript: {
    strict: true,
    shim: false,
  },

  buildModules: ['nuxt-windicss'],
})
