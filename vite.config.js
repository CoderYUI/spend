import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: process.cwd(),
  base: './',
  publicDir: 'public',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        about: resolve(__dirname, 'about.html'),
        reward: resolve(__dirname, 'reward.html')
      }
    }
  }
})
