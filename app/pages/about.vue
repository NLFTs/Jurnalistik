<template>
  <div ref="aboutPage" class="relative z-10 min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white pb-24 overflow-hidden">
    
    <!-- Header -->
    <header class="pt-24 md:pt-48 pb-16 md:pb-24 border-b border-neutral-100 relative">
       <!-- Decoration -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-50 to-transparent -z-10 skew-x-12 opacity-50"></div>

      <div class="max-w-5xl mx-auto px-6 md:px-12">
        <span class="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-8 overflow-hidden">
          <span class="block translate-y-full reveal-text">01 // MANIFESTO_PLATFORM</span>
        </span>
        
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] mb-12 text-neutral-900 mix-blend-multiply">
          <div class="overflow-hidden pb-2"><span class="block translate-y-full reveal-text">Rekayasa</span></div>
          <div class="overflow-hidden pb-4"><span class="block translate-y-full reveal-text"><em class="text-emerald-600 font-serif not-italic pr-4">Masa Depan</em> Web.</span></div>
        </h1>
        
        <div class="max-w-2xl overflow-hidden">
          <p class="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed translate-y-full reveal-text opacity-0">
            Basis pengetahuan digital yang didedikasikan untuk arsitektur web modern, pengalaman pengembang (DX), dan seni kerajinan perangkat lunak.
          </p>
        </div>
      </div>
    </header>

    <!-- Main Content Grid -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 pt-16 md:pt-24">
      
      <!-- Left Column: Blog Context & Mission -->
      <div class="lg:col-span-7 space-y-24">
        
        <!-- Section: The Mission -->
        <section class="reveal-section opacity-0 translate-y-12">
          <h2 class="text-xs font-bold uppercase tracking-widest mb-8 text-emerald-600 flex items-center gap-3">
            <span class="w-8 h-px bg-emerald-600"></span> Misi Utama
          </h2>
          <div class="prose prose-lg prose-neutral font-light text-neutral-600">
            <p class="text-3xl font-medium text-neutral-900 mb-8 leading-tight">
              Menjembatani celah antara <br>
              <span class="text-neutral-400">teori dan produksi.</span>
            </p>
            <p class="mb-6">
              Platform <span class="text-emerald-600">blog</span> ini dibangun sebagai sumber daya Pengetahuan bagi para pengembang yang menavigasi kompleksitas ekosistem <span class="text-emerald-600">JavaScript</span> modern maupun <span class="text-emerald-600">php</span> tradisional
            </p>
            <p>
              Kami tidak hanya berbagi tutorial yang kuno dan tidak relevan, kami mendokumentasikan <strong>keputusan arsitektural</strong>, membedah <strong>praktik terbaik ( Best Practice)</strong>, dan mengeksplorasi "<span class="text-emerald-600">Kenapa?</span>" di balik setiap baris kode. Mulai dari pembahasan mendalam tentang <strong>internal Framework</strong> hingga strategi <strong>Desain Sistem</strong> yang stabil dan mudah di pelihara.
            </p>
          </div>
        </section>

        <!-- Section: Content Philosophy -->
        <section class="reveal-section opacity-0 translate-y-12">
           <h2 class="text-xs font-bold uppercase tracking-widest mb-8 text-neutral-400 flex items-center gap-3">
            <span class="w-8 h-px bg-neutral-300"></span> Filosofi Konten
          </h2>
          
          <div class="grid gap-12">
             <article class="group relative pl-8 border-l border-neutral-200 hover:border-emerald-500 transition-colors duration-300">
               <h3 class="text-xl font-bold text-neutral-900 mb-2">Kedalaman > Hype</h3>
               <p class="text-neutral-500 leading-relaxed max-w-md">
                 Kami memprioritaskan prinsip rekayasa yang abadi daripada tren sesaat. Berfokus pada pengetahuan dasar yang dapat diandalkan.
               </p>
             </article>
             
             <article class="group relative pl-8 border-l border-neutral-200 hover:border-emerald-500 transition-colors duration-300">
               <h3 class="text-xl font-bold text-neutral-900 mb-2">Praktis & Dapat Diterapkan</h3>
               <p class="text-neutral-500 leading-relaxed max-w-md">
                 Setiap artikel didukung oleh skenario dunia nyata. Potongan kode dirancang agar siap pakai untuk aplikasi produksi Anda.
               </p>
             </article>

             <article class="group relative pl-8 border-l border-neutral-200 hover:border-emerald-500 transition-colors duration-300">
               <h3 class="text-xl font-bold text-neutral-900 mb-2">Pengetahuan Terbuka</h3>
               <p class="text-neutral-500 leading-relaxed max-w-md">
                 Informasi ingin menjadi bebas. Kami percaya pada kontribusi open-source dan pembelajaran berbasis komunitas.
               </p>
             </article>
          </div>
        </section>

      </div>

      <!-- Right Column: Platform Tech (Sticky) -->
      <aside class="lg:col-span-5 lg:pl-12">
        <div class="sticky top-12 space-y-16 reveal-section opacity-0 translate-y-12">
          
          <!-- Stack -->
          <div>
            <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-2">
              Ditenagai Oleh
            </h3>
            
            <div class="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 transition-all hover:shadow-lg hover:shadow-emerald-500/5">
              <p class="text-xs text-neutral-500 mb-6 font-mono leading-relaxed">
                // Platform ini sendiri adalah bukti dari teknologi yang kami tulis. Dibangun untuk kecepatan, SEO, dan pengalaman pengembang.
              </p>
              <ul class="space-y-4 font-mono text-sm">
                 <li class="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                   <span class="text-neutral-900 font-medium">Nuxt 4</span>
                   <span class="text-neutral-400">// Mesin Utama</span>
                 </li>
                 <li class="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                   <span class="text-neutral-900 font-medium">Nuxt Content</span>
                   <span class="text-neutral-400">// CMS Headless</span>
                 </li>
                 <li class="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                   <span class="text-neutral-900 font-medium">Tailwind CSS</span>
                   <span class="text-neutral-400">// Utilitas Gaya</span>
                 </li>
                 <li class="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                    <span class="text-neutral-900 font-medium">GSAP</span>
                    <span class="text-neutral-400">// Interaksi</span>
                  </li>
                  <li class="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                    <span class="text-neutral-900 font-medium">Algolia</span>
                    <span class="text-neutral-400">// Indeks Pencarian</span>
                  </li>
              </ul>
            </div>
          </div>

          <!-- Support Context -->
          <div>
            <p class="text-lg font-light text-neutral-500 mb-6 leading-relaxed">
               Menemukan nilai dari tulisan kami? Dukung kami untuk terus menyajikan konten teknis berkualitas tinggi.
             </p>
             <div class="flex flex-col gap-4">
               <a href="https://afdian.com/@davingm" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition-colors duration-300 group w-fit shadow-lg shadow-red-500/30">
                 Traktir Kopi ☕
               </a>
             </div>
          </div>

        </div>
      </aside>

    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutPage = ref(null)
let ctx

// Updated SEO for Blog Identity (Indonesian)
useSeoMeta({
  title: 'Tentang Platform',
  description: 'Pelajari misi, filosofi, dan teknologi di balik blog teknik ini.',
  ogTitle: 'Tentang - Basis Pengetahuan Rekayasa Digital',
  ogDescription: 'Menjembatani kesenjangan antara teori dan kode produksi. Eksplorasi mendalam arsitektur web modern.',
})

onMounted(() => {
  if (aboutPage.value) {
    ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Header Text Reveal Sequence
      tl.to('.reveal-text', {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        delay: 0.2
      })

      // Section Scroll Reveals
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        })
      })

    }, aboutPage.value)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
