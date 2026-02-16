<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white flex flex-col relative overflow-hidden">
    
    <!-- Background Texture -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 text-center">
      
      <!-- Error Code Display -->
      <div class="relative mb-8">
        <h1 class="error-code text-[25vw] leading-[0.8] font-black tracking-tighter text-neutral-900 select-none mix-blend-multiply opacity-0 translate-y-20">
          {{ error.statusCode }}
        </h1>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
           <span class="error-stagger block text-xs md:text-sm font-mono uppercase tracking-[0.5em] text-emerald-600 bg-white/90 backdrop-blur-sm py-1 px-4 rounded-full border border-emerald-100 opacity-0">
             // {{ errorTitle }}
           </span>
        </div>
      </div>

      <!-- Description -->
      <div class="max-w-xl mx-auto space-y-8">
        <p class="error-stagger text-xl md:text-2xl font-light leading-relaxed text-neutral-600 opacity-0 translate-y-4">
          {{ errorMessage }}
        </p>
        
        <div class="error-stagger opacity-0 translate-y-4">
           <!-- Stack Trace (Only visible in dev or if specific message exists) -->
           <div v-if="error.message && error.statusCode !== 404" class="mb-8 p-4 bg-neutral-50 border border-neutral-200 rounded-lg text-left text-xs font-mono text-neutral-500 overflow-x-auto max-w-lg mx-auto">
             > {{ error.message }}
           </div>

           <button @click="handleError" class="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/20">
             <span class="relative z-10 font-bold uppercase tracking-widest text-sm">Kembali ke Beranda</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
           </button>
        </div>
      </div>

    </main>

    <!-- Footer Meta -->
    <footer class="py-8 text-center relative z-10">
      <p class="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
        System Status: {{ error.statusCode === 500 ? 'CRITICAL_FAILURE' : 'PATH_NOT_FOUND' }}
      </p>
    </footer>

  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

const errorTitle = computed(() => {
  if (props.error.statusCode === 404) return 'HALAMAN TIDAK DITEMUKAN'
  return 'KESALAHAN SISTEM'
})

const errorMessage = computed(() => {
  if (props.error.statusCode === 404) {
    return "Koordinat yang Anda berikan menunjuk ke kekosongan. Halaman ini tidak ada dalam realitas kita saat ini."
  }
  return "Terjadi anomali tak terduga di inti sistem. Para insinyur kami telah diberitahu."
})

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  
  tl.to('.error-code', {
    y: 0,
    opacity: 1,
    duration: 1.5,
  })
  .to('.error-stagger', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
  }, '-=1.0')
})
</script>
