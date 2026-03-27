import { defineConfig } from 'vite'
import nunjucks from 'nunjucks'
import fs from 'fs'
import path from 'path'

function renderNunjucks() {
  return {
    name: 'nunjucks-transform',

    transformIndexHtml(html, ctx) {
      const filePath = ctx.filename
      const template = fs.readFileSync(filePath, 'utf-8')
      return nunjucks.renderString(template)
    }
  }
}

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        services: path.resolve(__dirname, 'services.html'),
        contact: path.resolve(__dirname, 'contact.html')
      }
    }
  },
  plugins: [renderNunjucks()]
})