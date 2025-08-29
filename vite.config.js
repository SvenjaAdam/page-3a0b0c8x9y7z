import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths for GitHub Pages
  server: {
    port: 3002, // Neuer Port
    open: true  // Browser öffnet sich automatisch
  }
})
