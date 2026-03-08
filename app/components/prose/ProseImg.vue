<template>
  <div class="my-8 rounded-2xl overflow-hidden shadow-md border border-neutral-100 bg-neutral-50 group">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      class="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
    />
    <div v-if="alt" class="px-4 py-2 bg-white/80 border-t border-neutral-100 italic text-neutral-400 text-[10px] uppercase font-bold tracking-widest text-center">
      {{ alt }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})
</script>
