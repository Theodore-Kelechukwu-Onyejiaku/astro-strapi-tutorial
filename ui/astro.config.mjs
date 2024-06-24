import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'en',
        locales: ['es', 'en']
    },
    output: "server",
    adapter: node({
        mode: "standalone"
    })
});