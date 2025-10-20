import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removemos 'root: "./"' porque o index.html estará na raiz.
  build: {
    outDir: 'dist', 
    emptyOutDir: true,
  },
});
