import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
const NutUIStyleResolver = () => {
  return (name: string) => {
    if (name.startsWith('Nut')) {
      return {
        name: name.slice(3),
        from: '@nutui/nutui',
        sideEffects: `@nutui/nutui/dist/packages/${name.slice(3).toLowerCase()}/style`
      }
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [NutUIStyleResolver()],
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
  build: {
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // entryFileNames: `demo-${config.version}/[name].js`,
      }
    }
  }

})
