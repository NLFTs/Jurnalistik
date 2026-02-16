<template>
  <div>
    <NuxtLoadingIndicator color="#10b981" :height="4" :throttle="0" style="z-index: 100;" />
    <NuxtLayout>
      <NuxtPage :key="$route.path" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
// Nuxt 4 uses the app directory
import '~/assets/css/main.css'

const route = useRoute()

watch(() => route.path, (newPath) => {
  console.log('Route changed to:', newPath)
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | MyBlog` : 'MyBlog - Modern Content Experience';
  },
  htmlAttrs: {
    lang: 'id'
  }
})
</script>
