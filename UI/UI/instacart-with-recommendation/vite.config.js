import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelPluginStyledComponents from 'babel-plugin-styled-components';

// ✅ Babel 플러그인 추가
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [babelPluginStyledComponents],
      },
    }),
  ],
});
