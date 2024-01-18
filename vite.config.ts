// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Make sure the entry point is correct
    
    rollupOptions: {
      input: 'src/pages/Main/Main.tsx', // Update with your actual entry file
    },
  },
});
