import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      // JPEG optimization – near-lossless
      mozjpeg: {
        quality: 95, 
        progressive: true,
      },

      // PNG optimization – lossless
      pngquant: {
        quality: [0.95, 1],
        speed: 1,     
      },

      // WebP optimization – high quality
      webp: {
        quality: 95, // visually lossless
        lossless: true,
      },

      svgo: false,
    }),
  ],

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
