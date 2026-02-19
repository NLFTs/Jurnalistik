<template>
  <main ref="postMain" class="py-12 max-w-4xl mx-auto px-6">
    <div v-if="post">
      <article class="space-y-8 post-content">
        <!-- Header -->
        <header class="space-y-4">
          <NuxtLink to="/blog" class="text-emerald-600 hover:underline flex items-center gap-2 mb-8">
            ← Back to Blog
          </NuxtLink>
          <h1 class="text-4xl md:text-6xl font-extrabold text-black">{{ post.title }}</h1>
          <div class="flex items-center gap-4 text-neutral-500 text-sm">
            <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}</time>
            <span>•</span>
            <div class="flex gap-2">
              <span v-for="tag in post.tags" :key="tag" class="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                #{{ tag }}
              </span>
            </div>
          </div>
        </header>

        <!-- Featured Image -->
        <div v-if="post.image" class="aspect-video w-full rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <!-- Content rendering for Content v3 -->
        <div class="prose prose-neutral prose-emerald max-w-none 
          prose-headings:text-black prose-headings:font-bold prose-headings:tracking-tight 
          prose-a:text-emerald-600 prose-code:text-emerald-700 
          prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-200 shadow-sm">
          <ContentRenderer :value="post" />
        </div>
      </article>
      
      <!-- Share Buttons -->
      <div class="mt-12 pt-8 border-t border-neutral-200">
        <h3 class="font-bold text-neutral-900 mb-4">Bagikan Artikel Ini:</h3>
        <UiShareButtons :title="post.title" :url="fullUrl" />
      </div>

      <!-- Dynamic SEO -->

    </div>
    <div v-else class="text-center py-20">
      <h1 class="text-2xl font-bold">Postingan tidak ditemukan</h1>
      <NuxtLink to="/blog" class="text-emerald-600 hover:underline mt-4 block">Kembali ke Blog</NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'

const route = useRoute()
const postMain = ref(null)
let ctx

const config = useRuntimeConfig()
const siteUrl = config.public.site?.url || 'https://jurnalistik.nlfts.dev'

const fullUrl = computed(() => {
  return `${siteUrl}${route.path}`
})

// Slug dari route (stabil untuk cache di dev vs Vercel/SSR)
const slugParam = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug || '')

// Normalisasi path: coba beberapa format agar jalan di dev dan production (Vercel)
const { data: post } = await useAsyncData(`blog-post-${slugParam}`, async () => {
  // Normalize path to look for
  const currentPath = route.path.replace(/\/$/, '')
  
  // Try finding by path first
  let result = await queryCollection('blog').path(currentPath).first()
  
  // If not found, try by stem (filename)
  if (!result) {
    const stem = slugParam.startsWith('blog/') ? slugParam : `blog/${slugParam}`
    result = await queryCollection('blog').where('stem', '=', stem).first()
  }

  // Final check for type
  if (result && result.type === 'article') {
    return result
  }
  
  return null
})

// SEO & Social Share
const ogImage = computed(() => {
  if (!post.value?.image) return `${siteUrl}/images/og-default.jpg` // Fallback image
  if (post.value.image.startsWith('http')) return post.value.image
  return `${siteUrl}${post.value.image}`
})

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
  author: () => post.value?.author?.name || 'DavinGM',
  
  // Open Graph
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
  ogImage: ogImage,
  ogUrl: fullUrl,
  ogType: 'article',
  articlePublishedTime: () => post.value?.date,
  articleAuthor: () => post.value?.author?.name || 'DavinGM',
  articleTag: () => post.value?.tags,

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title,
  twitterDescription: () => post.value?.description,
  twitterImage: ogImage,
  twitterCreator: '@davingm', // Replace with actual handle if available
})

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    if (postMain.value && post.value) {
      ctx = gsap.context(() => {
        gsap.from('.post-content > *', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        })
      }, postMain.value)
    }
  }, 100)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style>
/* Custom prose styles */
.prose h1, .prose h2, .prose h3 {
  scroll-margin-top: 100px;
}
</style>
