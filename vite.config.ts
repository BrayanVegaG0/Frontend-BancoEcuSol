import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // CAMBIO: Usa 'process.cwd()' (la carpeta raíz) en lugar de '__dirname'
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})