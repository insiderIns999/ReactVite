import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/* Запучск сервера

cd vite-project
npm install
npm run dev
*/
