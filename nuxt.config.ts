// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 4 compatibility
  future: {
    compatibilityVersion: 4,
  },

  // In Nuxt 3/4, srcDir can be used to group source files.
  // We'll keep it to 'app' but ensure we don't have overlapping config.
  srcDir: 'app',

  vite: {
    plugins: [
      // Prevent [request error] [unhandled] [GET] /_nuxt/ 404: return 204 for
      // asset root (with or without trailing slash) so dev server doesn't pass
      // { status: 404 } to createError (which expects message/statusMessage).
      {
        name: 'nuxt-root-slash',
        configureServer (server: any) {
          server.middlewares.use((req: any, res: any, next: () => void) => {
            const path = req.url?.split('?')[0] ?? ''
            if (path === '/_nuxt/' || path === '/_nuxt') {
              res.statusCode = 204
              res.end()
              return
            }
            next()
          })
        }
      }
    ]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/algolia'
  ],

  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY || '',
    applicationId: process.env.ALGOLIA_APPLICATION_ID || '',
    instantSearch: {
      theme: 'algolia'
    }
  },

  runtimeConfig: {
    public: {
      algolia: {
        applicationId: process.env.ALGOLIA_APPLICATION_ID || '',
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY || '',
      }
    }
  },

  // Content module configuration
  // Note: If you get type errors on 'highlight', it might be due to Nuxt Content v3 changes
  content: {
    // Basic config
  },

  // SEO modules configuration
  site: {
    url: 'http://blog.davingm.com',
    name: 'DavinGM Blog',
    description: 'Kumpulan tulisan mengenai teknologi, pemrograman, dan desain antarmuka moderen.',
    defaultLocale: 'id',
  },

  sitemap: {
    sources: [
      '/api/sitemap-urls'
    ]
  },

  components: [
    { path: '~/components/ui', prefix: 'Ui' },
    { path: '~/fragments', pathPrefix: false }
  ],

  app: {
    // Disable transitions for debugging navigation bug
    pageTransition: false,
    layoutTransition: false,
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
