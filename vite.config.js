import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/page-3a0b0c8x9y7z/', // GitHub Pages Repository Name
  server: {
    port: 3002, // Neuer Port
    open: true  // Browser öffnet sich automatisch
  }
})
