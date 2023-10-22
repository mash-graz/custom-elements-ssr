// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/dsd-polyfill.ts'),
            name: 'dsd-polyfill',
            fileName: 'dsd-polyfill',
            formats: ['es'],
        },
    },
    plugins: [],
});