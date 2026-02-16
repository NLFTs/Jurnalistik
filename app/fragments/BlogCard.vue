<template>
  <NuxtLink :to="post.path" class="blog-card group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 border border-neutral-100 ring-1 ring-neutral-900/5">
    <!-- Image Section - Fixed Aspect Ratio -->
    <div class="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
      <img 
        v-if="post.image" 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div v-else class="w-full h-full flex items-center justify-center text-neutral-400">
        <span class="text-xs font-mono uppercase tracking-widest">No Image</span>
      </div>
      
      <!-- Category Badge - Top Left -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-700 text-[10px] font-bold tracking-wider rounded-lg shadow-sm border border-white/50 uppercase">
          {{ post.tags?.[0] || 'Article' }}
        </span>
      </div>
    </div>

    <!-- Content Section - Flex Grow to Ensure Equal Height -->
    <div class="p-6 flex flex-col flex-grow relative">
      <!-- Author Info -->
      <div class="flex items-center gap-3 mb-4">
        <div class="w-9 h-9 rounded-full overflow-hidden border border-neutral-100 shadow-sm">
           <img :src="post.author?.avatar" :alt="post.author?.name" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-bold text-neutral-900">{{ post.author?.name }}</span>
          <span class="text-[10px] text-neutral-500 font-medium">{{ formatDate(post.date) }}</span>
        </div>
      </div>

      <!-- Title -->
      <h2 class="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
        {{ post.title }}
      </h2>

      <!-- Description -->
      <p class="text-neutral-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
        {{ post.description }}
      </p>

      <!-- Bottom Meta -->
      <div class="pt-4 border-t border-neutral-50 flex justify-between items-center text-xs text-neutral-400 mt-auto">
        <span class="font-medium text-neutral-500">{{ post.author?.role || 'Contributor' }}</span>
        <span class="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-emerald-600 font-semibold cursor-pointer">
          Read Article <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>
