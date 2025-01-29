import { defineConfig } from 'vite'

export default defineConfig({
  base: '',  // Changed to empty string for relative paths
  server: {
    port: 5173,
    strictPort: false, // Allows fallback to next available port
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: '/index.html',
        dashboard: '/dashboard.html'
      }
    }
  }
})
