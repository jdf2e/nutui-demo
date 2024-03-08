const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack').default
const NutUIResolver = require('@nutui/auto-import-resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components({
        resolvers: [NutUIResolver()],
      })
    ],
  }
})