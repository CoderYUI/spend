import { defineConfig } from 'vite';

export default defineConfig({
  root: './public',
  server: {
    open: true, // Automatically open the browser
  },
  build: {
    outDir: '../dist', // Specify the output directory for the build
    rollupOptions: {
      input: {
        main: 'public/index.html',
        dashboard: 'public/dashboard.html',
      },
    },
  },
});
