<script setup lang="ts">
const listExample = ref([
  {
    label: "Error Handler and Cookies",
    path: "/error-and-cookies",
  },
  {
    label: "Encryption",
    path: "/encryption",
  },
]);
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="border-2 border-gray-600 rounded-lg py-6 px-8">
      <div class="text-xl font-bold mb-4 text-center">Examples</div>
      <ul class="list-disc">
        <li v-for="item in listExample">
          <NuxtLink :to="item.path" class="hover:underline">{{
            item.label
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
