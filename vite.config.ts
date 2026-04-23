import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Do NOT inline large assets as base64 — serve them as files
    assetsInlineLimit: 4096, // 4KB max inline
    rollupOptions: {
      output: {
        // Split vendor bundle for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Generate source maps only in dev
    sourcemap: false,
    // Target modern browsers
    target: 'es2020',
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
