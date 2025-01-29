import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dashboard: 'dashboard.html',
        about: 'about.html',
        reward: 'reward.html'
      }
    }
  }
})
