import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      widget: path.resolve(__dirname, './src'),
    },
  },
  base: '/widget/',
  server: {
    // 4104 is the second 4-digit Ramanujan-Hardy number. It
    // can be expressed in two unique ways as the sum of cubes:
    // 4104 = 2^3 + 16^3 = 4104 = 9^3 + 15^3
    port: 4104,
  },
});
