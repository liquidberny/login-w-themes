import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Importa el módulo 'path' para manejar rutas
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Configura el alias '@' para que apunte a la carpeta 'src'
    }
  }
});