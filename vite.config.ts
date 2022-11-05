import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (ext) => `index.${ext}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'vue-demi',
        'vue',
        '@codemirror/highlight',
        '@codemirror/lang-css',
        '@codemirror/lang-html',
        '@codemirror/lang-javascript',
        '@codemirror/state',
        '@codemirror/view',
        '@codesandbox/sandpack-client',
      ],
    },
    target: 'esnext',
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
});
