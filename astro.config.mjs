import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import vuetifyPlugin from 'vite-plugin-vuetify'

/**
 * Vuetify integration for Astro
 * @param {import('astro/config').Options} options
 * @returns {import('astro/config').AstroIntegration}
 */
 function vuetify() {
  return {
    name: 'my-astro-vuetify-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ['vuetify'],
            },
            plugins: [vuetifyPlugin()],
          },
        });
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/_app',
    }),
    vuetify()
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
});
