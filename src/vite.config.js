import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/homepage/',  // ← ここを「/homepage/」にします！
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})