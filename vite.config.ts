import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Target modern browsers for smaller bundles
        target: 'es2020',
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            // Split vendor chunks for better caching
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'router': ['react-router-dom'],
              'icons': ['lucide-react'],
            }
          }
        },
        // Minify CSS
        cssMinify: true,
        // Minify JS
        minify: 'esbuild',
      }
    };
});
