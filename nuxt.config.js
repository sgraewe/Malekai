const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    port: 5500,
    host: '0.0.0.0' // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Malekai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Malekai' },
      { property: 'og:description', content: 'The Premier Crowfall Destination.' },
      { property: 'og:image', content: 'https://thievesrun.org/images/malekai-promo.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-purgecss',

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://axios.nuxtjs.org/options
  },

  /*
   ** PurgeCSS
   ** https://github.com/Developmint/nuxt-purgecss
   */
  purgeCSS: {},

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zindex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
     ** Extract CSS
     */
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
