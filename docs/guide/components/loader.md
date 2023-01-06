<script lang="ts" setup>
import api from '@anu/component-meta/ALoader.json'
</script>

# Loader

<!-- 👉 Basic -->
::::card Basic

Use `ALoader` component to display a loader.

:::code DemoLoaderBasic
<<< @/components/demos/loader/DemoLoaderBasic.vue{3,4}
:::

::::

<!-- 👉 Sizing -->
::::card Sizing

Use the `text-` font-size utility to adjust the size of the loader.
By default, the loader follow the current font size.

:::code DemoLoaderSizing
<<< @/components/demos/loader/DemoLoaderSizing.vue{3-7,9}
:::

::::

<!-- 👉 Colors -->
::::card Colors

You can use `color` prop to change the loader color.
By default, the loader follow the current text color.

:::code DemoLoaderColors
<<< @/components/demos/loader/DemoLoaderColors.vue{3-7,9}
:::

::::

<!-- 👉 Overlay -->
::::card Overlay

Use the prop `overlay` to cover the parent component. You can change the apparence of the overlay with `bg-` and `bg-opacity-` unocss utilities.

:::code DemoLoaderOverlay
<<< @/components/demos/loader/DemoLoaderOverlay.vue{12,16}
:::

::::

<!-- 👉 Components -->
::::card Components

`ALoader` can be used in other components.

To completely cover the component, use the `overlay` prop.

:::code DemoLoaderComponents
<<< @/components/demos/loader/DemoLoaderComponents.vue{20-24,37-44,58-62,75-79,90,99,110,118}
:::

::::

:::tip
`ABtn` and `AInput` already got a `loading` prop with custom behavior.
:::

<!-- 👉 Slot and Typography -->
::::card Slot and Typography

You can change the loader with the default slot.

Loader component uses `ATypography` component for its typography.

:::code DemoLoaderSlot
<<< @/components/demos/loader/DemoLoaderSlot.vue{5,6,8}
:::

::::

<!-- 👉 Full page -->
::::card Full page

You can display the loader component in a full page.

:::code DemoLoaderFullPage
<<< @/components/demos/loader/DemoLoaderFullPage.vue{14}
:::

::::

<!-- 👉 API -->
## API

<Api :api="api"></Api>
