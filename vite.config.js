import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the build works on GitHub Pages
// whether the repo is a project site (/repo-name/) or username.github.io
export default defineConfig({
  plugins: [react()],
  base: './',
})
