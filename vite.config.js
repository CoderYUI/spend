import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard/index.html')
      },
      output: {
        manualChunks: undefined
      }
    },
    assetsDir: 'assets',
    copyPublicDir: true
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@images': resolve(__dirname, './Images'),
      '@dashboard': resolve(__dirname, './dashboard')
    }
  },
  publicDir: 'public'
});
