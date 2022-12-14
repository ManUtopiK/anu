<script lang="ts" setup>
</script>

<template>
  <Story
    title="ABtn"
    :layout="{ type: 'grid', width: '25%' }"
  >
    <template
      v-for="color of $colors"
      :key="color"
    >
      <Variant
        v-for="variant of $variants"
        :key="variant + color"
        :title="$title(variant, color)"
      >
        <ABtn
          :color="color"
          :variant="variant"
        >
          {{ color }}
        </ABtn>
      </Variant>
    </template>
  </Story>
</template>
