import { defineConfig } from 'vite'
import nunjucks from 'nunjucks'

export default defineConfig({
  build: {
    outDir: 'dist'
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