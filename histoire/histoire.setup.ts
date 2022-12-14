import '@anu-vue/preset-theme-default/dist/styles.scss'
import { anu } from 'anu-vue'
import 'anu-vue/dist/style.css'
import 'uno.css'

import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(anu, {
    registerComponents: true,
  })

  // Inject a globally $colors and $variants
  app.config.globalProperties.$colors = ['primary', 'success', 'info', 'warning', 'danger']
  app.config.globalProperties.$variants = ['fill', 'light', 'outline', 'text']
  app.config.globalProperties.$title = (variant: string, color: string) => {
    return `color="${color}" variant="${variant}"`
  }

  // Provide access to `colors` and `variants` in script setup with `const { colors, variants } = inject('app')`
  app.provide('app', {
    colors: app.config.globalProperties.$colors,
    variants: app.config.globalProperties.$variants,
    title: app.config.globalProperties.$title,
  })
})
