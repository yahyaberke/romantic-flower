import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' → tüm dosyalar relative path ile yüklenir.
// Böylece repository adı ne olursa olsun (ör. /romantic-flower/) site çalışır.
// İstersen sabit bir değer verebilirsin: base: '/REPO-ADIN/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
