import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import styleImport from 'vite-plugin-style-import';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  styleImport({
    libs: [
      {
        libraryName: '@nutui/nutui',
        libraryNameChangeCase: 'pascalCase',
        resolveStyle: (name) => {
          return `@nutui/nutui/dist/packages/${name}/index.scss`
        }
      }
    ],
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
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "./src/assets/custom_theme.scss";`
      }
    }
  },
})
