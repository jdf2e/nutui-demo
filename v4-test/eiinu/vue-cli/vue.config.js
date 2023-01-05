const { defineConfig } = require("@vue/cli-service");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const { NutUIResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [NutUIResolver()],
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
});
