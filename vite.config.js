// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  // Other Rollup configuration options...
  build: {
    rollupOptions: {
      input: {
        // main: '/src/main.jsx',
        main: './src/main.jsx',
      },
      output: {
        // Specify the desired output directory and format
        dir: './src',
        format: 'es',
      },
      // Exclude HTML files from bundling
      // exclude: ['/index.html'],
      exclude: ['./index.html'],
    },
  },
};