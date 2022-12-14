declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $colors: string[]
    $variants: string[]
    $title: Function
  }
}

// https://stackoverflow.com/a/64189046/479957
export { }
