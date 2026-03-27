import { defineConfig } from 'vite'
import nunjucks from 'nunjucks'

export default defineConfig({
  build: {
    outDir: 'dist',

    rollupOptions: {
      input: {
        main: 'index.html',
        services: 'services.html',
        contact: 'contact.html'
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