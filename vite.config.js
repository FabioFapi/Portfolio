import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Changed from @vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Change this to your GitHub repository name
});