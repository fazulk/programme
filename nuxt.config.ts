import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({  
  
  modules: [    
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    entities: ['products', 'orders', 'subscribers'],
  }, 

  typescript: {
    shim: false,
  },
});
