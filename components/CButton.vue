<script setup lang="ts">
import { PropType } from "vue";

const emit = defineEmits(["click"]);
defineProps({
  color: {
    type: String as PropType<
      "blue" | "red" | "blue-outline" | "red-outline" | "gray" | "gray-outline"
    >,
    default: "blue",
  },
});
</script>

<template>
  <button
    class="px-3 py-1 rounded hover:brightness-125"
    :class="color"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped lang="postcss">
.blue {
  @apply bg-blue-500 bg-gradient-to-r from-blue-400 text-white;
}
.blue-outline {
  @apply bg-white border border-blue-500 text-blue-500;
}
.red {
  @apply bg-red-500 bg-gradient-to-r from-red-400 text-white;
}
.red-outline {
  @apply bg-white border border-red-500 text-red-500 outline-none;
}
.gray {
  @apply bg-gray-500 bg-gradient-to-r from-gray-400 text-white;
}
.gray-outline {
  @apply bg-white border border-gray-500 text-gray-500 outline-none;
}
</style>
