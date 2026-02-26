import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
                services: resolve(__dirname, 'services/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
                privacy: resolve(__dirname, 'privacy-policy/index.html'),
                terms: resolve(__dirname, 'terms-of-use/index.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
});
