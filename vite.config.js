import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    strictPort: false, // Allows fallback to next available port
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html',
        dashboard: '/dashboard.html',
        about: '/about.html',
        reward: '/reward.html'
      }
    }
  }
})
