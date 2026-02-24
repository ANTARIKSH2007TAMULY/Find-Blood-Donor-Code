import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Find-My-Donor-Code/', // ✅ important for GitHub Pages
  plugins: [react(), tailwindcss()],
})
