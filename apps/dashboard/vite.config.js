import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import path from 'path';
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [
    VueRouter({}),
    createVuePlugin({}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      dashboard: path.resolve(__dirname, './src'),
      shared: path.resolve(__dirname, './src/shared'),
    }
  }
})
