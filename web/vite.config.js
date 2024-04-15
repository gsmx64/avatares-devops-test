import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
//import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      host: env.VITE_HOST || null,
      port: env.VITE_PORT || null,
      hmr: {
        clientPort: env.VITE_CLIENT_PORT || null
      },
      proxy: {
        "/api": {
          target: env.VITE_API_URL || null,
          changeOrigin: true,
          secure: false,
        }
      }
    },
    logLevel: 'info',
    plugins: [react()],
  }
});
