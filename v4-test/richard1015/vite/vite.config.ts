import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
const NutUIResolver = () => {
  return (name) => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: '@nutui/nutui',
        sideEffects: `@nutui/nutui/dist/packages/${partialName.toLowerCase()}/style`
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
      resolvers: [NutUIResolver()],
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
