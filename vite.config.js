import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: 'public/index.html',
        dashboard: 'public/dashboard.html',
      }
    }
  },
});
