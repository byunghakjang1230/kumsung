export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '금성출판사',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
    ],
    script: [
       { src:  "https://unpkg.com/aos@2.3.1/dist/aos.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // ex) src: '~assets/scss/index.scss', lang: 'scss'
  css: [
    { src: '~assets/css/common.css', lang: 'css' },
    { src: '~assets/css/main.css', lang: 'css' },
    { src: '~assets/css/reset.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/js/aos", ssr: false }
  ],
  plugins: [
    { src: "~plugins/js/main", ssr: false }
  ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
