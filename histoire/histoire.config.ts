import { URL, fileURLToPath } from 'url'
import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'histoire'

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [HstVue()],
  vite: {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../packages/anu-vue/src', import.meta.url)),
      },
    },
  },
})
