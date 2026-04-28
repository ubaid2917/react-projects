import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Some environments miss filesystem events; polling is more reliable.
      usePolling: true,
      interval: 150,
    },
  },
})
