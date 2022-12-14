<script lang="ts" setup>
import { ref } from 'vue'

const items = [
  { text: 'Donut jujubes' },
  { text: 'Sesame snaps' },
  { text: 'I love jelly' },
  { text: 'Cake gummi', disable: true },
]

const slotSelection = ref(0)
</script>

<template>
  <Story
    title="AList"
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
        <AList
          v-model="slotSelection"
          :items="items"
          class="[--a-list-gap:0.25rem]"
        >
          <template #default="{ handleListItemClick }">
            <AListItem
              v-for="(item, index) in items"
              :key="item.text"
              :text="item.text"
              :value="index"
              :disable="item.disable"
              :is-active="slotSelection === index"
              :variant="variant"
              :color="color"
              @click="handleListItemClick(item, index)"
            />
          </template>
          <template #after>
            <hr class="my-2">
            <AList
              class="mb-0"
              :items="[{ subtitle: `Selected: ${slotSelection}` }]"
            />
          </template>
        </AList>
      </Variant>
    </template>
  </Story>
</template>
