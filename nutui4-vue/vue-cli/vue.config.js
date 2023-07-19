const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const NutUIResolver = require('@nutui/nutui/dist/resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components({
        resolvers: [NutUIResolver()],
      })
    ],
  },
  // 配置全局样式变量
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
})