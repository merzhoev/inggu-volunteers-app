import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// TODO-M: настроить алиасы

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
});
