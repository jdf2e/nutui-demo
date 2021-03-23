import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData:  `@import "./src/assets/custom_theme.scss";`
      }
    }
  },
})
