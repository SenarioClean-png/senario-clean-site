import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH permite publicar em subpasta (ex.: GitHub Pages em /nome-do-repo/).
// Em domínio próprio, Vercel ou Netlify, deixe sem definir (usa "/").
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
    allowedHosts: ['.us3.manus.computer'],
  },
});
