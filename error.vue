<script setup lang="ts">
// import a from "abc";
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <span>terjadi error</span>
    <div>{{ error }}</div>
  </div>
</template>
