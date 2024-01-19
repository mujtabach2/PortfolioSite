// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  
  // Update with your actual domain
  base: '/PortfolioSite/',
  plugins: [react()],
});