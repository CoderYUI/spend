import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: '/index.html',
        dashboard: '/dashboard.html',
        about: '/about.html',
        reward: '/reward.html'
      }
    }
  }
})
