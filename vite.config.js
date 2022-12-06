import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      // '@' 這個符號指向 src 資料夾
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
