export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/nutui.js", ssr: true }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        [
          "@nutui/babel-plugin-separate-import",
          {
            libraryName: "@nutui/nutui",
            libraryDirectory: "dist/packages",
            style: "css"
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.extensions.push(".sass");
    }
  }
};
