import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'dashboard': path.resolve(__dirname, "./src"),
      'widget': path.resolve(__dirname, "../livechat-widget/src"),
      vue: 'vue/dist/vue.js'
    },
  },
  define: {
    // 'process.env': process.env,
    // global: {},
  },
})
