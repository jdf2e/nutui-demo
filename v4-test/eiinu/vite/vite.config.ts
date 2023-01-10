import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
function NutUIResolver(options = {}) {
  const { taro = false } = options
  const packageName = taro ? '@nutui/nutui-taro' : '@nutui/nutui'
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Nut')) {
        const partialName = name.slice(3)
        return {
          name: partialName,
          from: packageName,
          sideEffects: `${packageName}/dist/packages/${partialName.toLowerCase()}/style`,
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NutUIResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
})
