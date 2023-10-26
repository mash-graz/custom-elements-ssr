// vite.config.ts
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: {
                'dsd-polyfill': 'src/dsd-polyfill.ts',
                'inject-dsd-polyfill': 'src/inject-dsd-polyfill.ts',
                'server': 'src/server.ts',
                index: 'src/index.ts'
            },
            formats: ['es'],
        },
    },
    plugins: [],
});