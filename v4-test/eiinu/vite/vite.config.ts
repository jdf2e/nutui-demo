import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
const NutUIResolver = () => {
  return (name: string) => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: `@nutui/nutui`,
        sideEffects: `@nutui/nutui/dist/packages/${name.slice(3).toLowerCase()}/style`
      }
    } 
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
