import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      srcDir: "./src",
      includeAssets: ['favicon.png', "./assets/"],
      manifest: {
        name: "FSG Tdot",
        short_name: "Tdot",
        description: "Webapp to guide pupils on the tdot.",
        theme_color: "#2E2E2E",
        lang: "de",

        icons: [
          {
            src: 'appicon.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/appicon.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'appicon.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      }
    })
  ],
  css:{
    postcss
  }
})
