import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/seika-2q-site/',    // ← あなたのリポジトリ名に変更する
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html'),
      },
    },
  },
})
