<template>
  <div class="min-h-screen">
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occured from template:{{ error }}</p>
      </template>
      <div class="container mx-auto">
        <!-- <NuxtPage></NuxtPage> -->
        <slot></slot>
      </div>
    </NuxtErrorBoundary>
  </div>
</template>
