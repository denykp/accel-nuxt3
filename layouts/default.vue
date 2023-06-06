<template>
  <div>
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occured from template:{{ error }}</p>
      </template>
      <div>
        <span>ini layout</span>
        <!-- <NuxtPage></NuxtPage> -->
        <slot></slot>
      </div>
    </NuxtErrorBoundary>
  </div>
</template>
