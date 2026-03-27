import { defineConfig } from 'vite'
import nunjucks from 'nunjucks'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  },
  plugins: [
    {
      name: 'nunjucks-transform',
      transformIndexHtml(html) {
        return nunjucks.renderString(html)
      }
    }
  ]
})