<template>
  <div ref="blogMain" id="blog-page-root" class="min-h-screen bg-white">
    <!-- Clean Minimalist Header -->
    <header class="pt-16 pb-6 px-6 relative">
        <div class="max-w-7xl mx-auto text-center space-y-4">
            <h1 class="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
                Writing <span class="text-emerald-600">Space</span>
            </h1>
            <p class="text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                Exploring code, design, and everything in between.
            </p>
        </div>
    </header>

    <!-- Content Grid with Strict Uniformity -->
    <div class="max-w-7xl mx-auto px-6 pb-24">
      <div v-if="status === 'pending' || !isReady" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <div v-for="i in 6" :key="i" class="h-full">
            <BlogCardSkeleton />
        </div>
      </div>
      <div v-else-if="list && list.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <div v-for="post in list" :key="post.path" class="h-full flex">
          <BlogCard :post="post" class="w-full" />
        </div>
      </div>
      <div v-else class="py-32 text-center text-neutral-400 font-light">
          Belum ada artikel yang diterbitkan.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const blogMain = ref(null)
const isReady = ref(false)

// Nuxt Content v3 way to fetch collection
const { data: list, status } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').all()
}, {
    lazy: true // Enable lazy loading
})

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 2000)
})

useSeoMeta({
  title: 'Blog',
  description: 'Daftar semua postingan blog saya tentang teknologi dan pengembangan web.',
  author: 'DavinGM',
  
  // Open Graph
  ogTitle: 'Blog | DavinGM',
  ogDescription: 'Daftar semua postingan blog saya tentang teknologi dan pengembangan web.',
  ogImage: '/images/blog-og.jpg',
  ogUrl: 'https://blog.davingm.com/blog',
  ogType: 'website',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog | DavinGM',
  twitterDescription: 'Daftar semua postingan blog saya tentang teknologi dan pengembangan web.',
  twitterImage: '/images/blog-og.jpg',
  twitterCreator: '@davingm'
})
</script>
