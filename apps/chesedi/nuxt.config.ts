// https://nuxt.com/docs/api/configuration/nuxt-config
// https 용도
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
export default defineNuxtConfig({
  app: {
    head: {},
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/supabase'],

  //css: ['@/assets/css/main.css'],
  // postcss 설정, tailwindcss 설정하면서 추가됨
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    // Options
    // jit: true,
    // add '~tailwind.config` alias
    // exposeConfig: true,
  },
  colorMode: {
    classSuffix: '',
  },

  // https://nuxt.com/docs/guide/concepts/rendering (beta)
  routeRules: {
    // '/': { redirect: { to: '/tailwind/color', statusCode: 302 } }, // 테슽
    // Static page generated on-demand, revalidates in background
    // '/blog/**': { swr: true },
    // // Static page generated on-demand once
    // '/articles/**': { static: true },
    // // Set custom headers matching paths
    // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // // Render these routes with SPA
    // '/admin/**': { ssr: false },
    // // Add cors headers
    // '/api/v1/**': { cors: true },
    // // Add redirect headers
    // '/old-page': { redirect: '/new-page' },
    // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
  },
})
