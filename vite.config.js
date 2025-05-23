import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; 

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsInline: false,
    assetsDir: 'assets',
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['dev.kamish.pro'],
  },
})
