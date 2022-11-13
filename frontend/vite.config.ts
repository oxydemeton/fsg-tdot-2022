import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import {group_count} from './src/script/Stations_and_gruops';

// https://vitejs.dev/config/
const icons = [
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
]

let shortcuts: {name: string, short_name?: string, url: string, description?: string, icons: Record<string, any>[]}[] = []
for (let i = 0; i < group_count; i++) {
  shortcuts[i] = {
    name: "Gruppe " + i,
    icons: icons,
    url: "/#group=" + i,
    description: "Beginning of group " +i,
    short_name: "G " + i,
  }
}

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
      workbox: {
        maximumFileSizeToCacheInBytes: 3000000,
      },
      manifest: {
        name: "FSG Tdot",
        short_name: "Tdot",
        description: "Webapp to guide pupils on the tdot.",
        theme_color: "#2E2E2E",
        lang: "de",
        shortcuts: shortcuts,
        icons: icons,
      }
    })
  ],
  css:{
    postcss
  }
})
