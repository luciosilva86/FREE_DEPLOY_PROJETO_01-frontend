import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração padrão de build: o Vite buscará o index.html na raiz
  build: {
    outDir: 'dist', 
    emptyOutDir: true,
  },
});
