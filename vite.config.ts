// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: {
                'dsd-polyfill': 'src/dsd-polyfill.ts',
                index: 'src/index.ts'
            },
            formats: ['es'],
        },
    },
    plugins: [],
});