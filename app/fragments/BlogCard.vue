<template>
  <!-- Article Card -->
  <NuxtLink 
    v-if="post.type !== 'image'"
    :to="post.path"
    class="blog-card group relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white ring-1 ring-neutral-900/5 hover:ring-emerald-500/20 shadow-sm hover:shadow-2xl rounded-2xl"
  >
    <!-- Abstract Decoration -->
    <div class="absolute -right-12 -top-12 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors duration-500 opacity-50"></div>

    <!-- Image Section -->
    <div class="relative w-full overflow-hidden bg-neutral-100 aspect-video">
      <img 
        v-if="post.image" 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      
      <!-- Badge -->
      <div class="absolute top-4 left-4 z-10">
        <span class="px-3 py-1 bg-white/95 backdrop-blur-md text-emerald-700 text-[10px] font-black tracking-widest rounded-full shadow-sm border border-neutral-100 uppercase">
          {{ post.tags?.[0] || 'Article' }}
        </span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-8 flex flex-col flex-grow relative">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-50 shadow-sm group-hover:rotate-12 transition-transform">
           <img :src="post.author?.avatar" :alt="post.author?.name" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-bold text-neutral-900">{{ post.author?.name }}</span>
          <span class="text-[10px] text-neutral-400 font-bold uppercase tracking-tight">{{ formatDate(post.date) }}</span>
        </div>
      </div>

      <h2 class="text-2xl font-black text-neutral-900 mb-4 line-clamp-2 leading-[1.1] tracking-tight group-hover:text-emerald-600 transition-colors">
        {{ post.title }}
      </h2>

      <p class="text-neutral-500 text-sm line-clamp-2 mb-8 flex-grow leading-relaxed font-light">
        {{ post.description }}
      </p>

      <div class="pt-6 border-t border-neutral-50 flex justify-between items-center text-[10px] mt-auto">
        <span class="font-bold text-neutral-400 uppercase tracking-widest">{{ post.author?.role }}</span>
        <div class="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
          Read Full <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </NuxtLink>

  <!-- Gallery Image Card -->
  <div 
    v-else
    @click="$emit('preview', post)"
    class="blog-card group relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white ring-1 ring-neutral-900/5 hover:ring-emerald-500/20 shadow-sm hover:shadow-2xl rounded-3xl cursor-zoom-in"
  >
    <div class="relative w-full h-full overflow-hidden bg-neutral-100 aspect-[4/5] md:aspect-auto">
      <img 
        v-if="post.image" 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      
      <!-- Gallery Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 opacity-80 group-hover:opacity-100 transition-all">
        <div class="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-sm">GALLERY</span>
          <h3 class="text-2xl font-bold text-white leading-tight">{{ post.title }}</h3>
          <div class="flex items-center gap-3 pt-2">
            <img :src="post.author?.avatar" class="w-6 h-6 rounded-full border border-white/20">
            <span class="text-[10px] text-white/70 font-bold uppercase tracking-widest">{{ post.author?.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})

defineEmits(['preview'])

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
</script>
