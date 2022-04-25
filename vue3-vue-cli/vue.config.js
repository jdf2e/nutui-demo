// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
      chainWebpack: config => {
        if (process.env.NODE_ENV == "production") {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },
  css: {
    loaderOptions: {
      // https://cli.vuejs.org/zh/guide/css.html#css-modules
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      postcss:{
        plugins:[
          require('postcss-plugin-px2rem')({
            exclude:/node_module/
          })
        ]
      },
      scss: {
        prependData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      },
    }
  },
}