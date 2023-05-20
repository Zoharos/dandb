import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import sass from 'sass';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
