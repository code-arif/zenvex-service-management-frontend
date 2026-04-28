// File: vite.config.js
// Vite configuration file

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The dev server will run on http://localhost:5173 by default
})