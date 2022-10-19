import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [{
          libraryName: '@nutui/nutui',
          libraryNameChangeCase: 'pascalCase',
          resolveStyle: (name) => {
            return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
          },
      }]
    }),
  ],
  // resolve: {
  //   alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: ` @import "./src/assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
})
