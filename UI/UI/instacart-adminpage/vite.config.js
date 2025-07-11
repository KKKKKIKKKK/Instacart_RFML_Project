import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      swcOptions: {
        jsc: {
          parser: {
            syntax: 'ecmascript',
            jsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
              refresh: true,
            },
            styledComponents: {
              displayName: true,
              fileName: true,
            },
          },
        },
      },
    }),
  ],
});
