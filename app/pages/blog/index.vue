<template>
  <div ref="blogMain" id="blog-page-root" class="min-h-screen bg-white relative overflow-hidden">
    <!-- Abstract Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-neutral-100 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-50 rounded-full blur-2xl"></div>
      
      <!-- Abstract Geometry -->
      <div class="absolute top-1/4 right-1/4 w-32 h-32 border border-emerald-200 rotate-45 opacity-50"></div>
      <div class="absolute bottom-1/3 left-10 w-20 h-40 bg-emerald-50 -rotate-12 opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent rotate-12"></div>
      
      <!-- Grid Overlay -->
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <!-- Header -->
    <header class="pt-24 pb-12 px-6 relative z-10">
        <div class="max-w-7xl mx-auto space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-[0.2em] rounded-full uppercase border border-emerald-100">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              The Gallery
            </div>
            <h1 class="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none max-w-4xl uppercase">
              Artful <br/>
              <span class="italic font-serif serif-font text-emerald-600 normal-case">Journalism</span>
            </h1>
            <p class="text-xl text-neutral-500 max-w-xl font-light leading-relaxed border-l-2 border-emerald-500 pl-6 py-2">
                Eksplorasi visual dan tekstual dalam dunia teknologi, desain, dan narasi jurnalistik modern.
            </p>
        </div>
    </header>

    <!-- Content Grid - Varied Layout -->
    <div class="max-w-7xl mx-auto px-6 pb-32 relative z-10 mt-12">
      <!-- Loading State -->
      <div v-if="status === 'pending' || !list" class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div v-for="i in 6" :key="i" :class="getSkeletonSpan(i)">
            <BlogCardSkeleton />
        </div>
      </div>

      <!-- Data List -->
      <div v-else-if="list.length > 0" class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div 
          v-for="(post, index) in list" 
          :key="post.id || post.path" 
          :class="getGridSpan(index, post.type)"
          class="flex"
        >
          <BlogCard :post="post" class="w-full" @preview="openLightbox" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="py-32 text-center text-neutral-400 font-light italic">
          Belum ada tulisan yang dipamerkan di galeri ini.
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="selectedPost" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" @click="selectedPost = null">
        <div class="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8 bg-neutral-950 rounded-3xl overflow-hidden border border-white/10" @click.stop>
          <button @click="selectedPost = null" class="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div class="flex-1 overflow-hidden h-full flex items-center justify-center bg-black">
            <img :src="selectedPost.image" :alt="selectedPost.title" class="max-w-full max-h-full object-contain">
          </div>
          <div class="w-full md:w-80 p-8 flex flex-col justify-between bg-neutral-900">
            <div class="space-y-6">
              <div class="space-y-2">
                <span class="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-sm">Gallery Preview</span>
                <h2 class="text-3xl font-black text-white leading-tight mt-2">{{ selectedPost.title }}</h2>
              </div>
              <p class="text-neutral-400 text-sm leading-relaxed">{{ selectedPost.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in selectedPost.tags" :key="tag" class="px-2 py-1 bg-white/5 text-neutral-300 text-[10px] uppercase font-bold tracking-wider rounded">#{{ tag }}</span>
              </div>
            </div>
            <div class="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div class="flex items-center gap-3">
                <img :src="selectedPost.author?.avatar" class="w-10 h-10 rounded-full border border-white/10">
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-white tracking-tight">{{ selectedPost.author?.name }}</span>
                  <span class="text-[10px] text-neutral-500 font-medium uppercase tracking-widest">{{ selectedPost.author?.role }}</span>
                </div>
              </div>
              <p class="text-[10px] text-neutral-600 font-bold uppercase tracking-tighter">{{ formatDate(selectedPost.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedPost = ref(null)

// Robust data fetching for SSR and Client
const { data: list, status, refresh } = await useAsyncData('blog-index-final-v2', () => {
  return queryCollection('blog').order('date', 'desc').all()
})

// Client-side fallback if SSR fails/misses data
onMounted(() => {
  if (!list.value || list.value.length === 0) {
    refresh()
  }
})

const getGridSpan = (index) => {
  const pattern = ['md:col-span-8', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-12']
  return pattern[index % pattern.length]
}

const getSkeletonSpan = (index) => {
  return getGridSpan(index)
}

const openLightbox = (post) => {
  selectedPost.value = post
}

const formatDate = (date) => {
  if (!date) return '-'
  try {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch {
    return date
  }
}

useSeoMeta({
  title: 'The Gallery | Jurnalistik',
  description: 'Ruang pameran karya jurnalistik digital, eksplorasi teknologi, dan desain modern.',
  ogTitle: 'The Gallery | Jurnalistik',
  ogDescription: 'Ruang pameran karya jurnalistik digital, eksplorasi teknologi, dan desain modern.',
  ogImage: 'https://jurnalistik.nlfts.dev/images/blog-og.jpg',
  ogUrl: 'https://jurnalistik.nlfts.dev/blog',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');
.serif-font { font-family: 'Playfair Display', serif; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
