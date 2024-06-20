import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), ghPages()],
  base: "/MimoBeautyWear/",
})
