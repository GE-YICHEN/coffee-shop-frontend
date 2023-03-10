// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt', '@element-plus/nuxt'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      // elementPlus: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/tailwind.css'],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden'
      },
      link: [
        {
          rel: 'icon',
          href: './favicon.ico',
          sizes: 'any'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
          integrity: 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=',
          crossorigin: ''
        }
      ]
    }
  },
  imports: {
    dirs: ['apis', 'constants']
  }
})
