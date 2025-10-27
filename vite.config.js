import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagemin({
    mozjpeg: {
      quality: 75,
    },
    pngquant: {
      quality: [0.65, 0.90],
      speed: 4,
    },
    webp: {
      quality: 75,
    },
    svgo: false, // Disable SVG optimization to avoid errors
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper'],
          gsap: ['gsap'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
