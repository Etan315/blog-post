import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: './',
  // This explicitly points to the folder ABOVE 'my-blog-app'
  envDir: path.resolve(__dirname, '..'), 
})