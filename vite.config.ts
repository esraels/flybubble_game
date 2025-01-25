import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Specify the base path if deploying to a subdirectory (e.g., GitHub Pages)
  base: '/test_game00/', // Adjust as needed. For GitHub Pages, you might set '/your-repo-name/'
  
  build: {
    // Specify the output directory
    outDir: 'dist',
    // Additional build options can be added here
  },

  server: {
    // Development server options
    port: 5173, // You can choose a different port if needed
  },
});