import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@contexts': path.resolve(__dirname, './src/contexts')
      
    },
  },
  plugins: [tsconfigPaths(), react()]
})
