import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // Sets the public folder as the root
  build: {
    outDir: '../dist', // Output directory for the build
  },
});
