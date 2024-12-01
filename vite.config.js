import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// caso queira mudar a porta da aplicação vite
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true,
    port: 3000,
  }
})
