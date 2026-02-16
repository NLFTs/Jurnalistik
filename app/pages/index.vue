<template>
  <div ref="main" class="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white font-sans overflow-x-hidden">
    
    <!-- SEO & Metadata -->


    <!-- Background Grid (Subtle Texture) -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" 
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <!-- Scroll Progress Line -->
    <div class="fixed top-0 left-0 h-1 bg-emerald-500 z-50 transition-all duration-100 ease-out" id="progress-bar" style="width: 0%"></div>

    <!-- Main Container -->
    <main class="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 pt-12 md:pt-32 pb-24">
      
      <!-- HERO SECTION -->
      <header class="grid lg:grid-cols-12 gap-12 mb-32 md:mb-56 items-start">
        
        <!-- Left Column: Typography -->
        <div class="lg:col-span-8 relative">
          <h1 class="font-black text-[13vw] lg:text-[11vw] leading-[0.85] tracking-tighter uppercase text-neutral-900 mix-blend-darken">
            <!-- Line 1 -->
            <div class="overflow-hidden pb-2 -mb-2">
              <span class="block title-reveal translate-y-full origin-bottom-left">Digital</span>
            </div>
            <!-- Line 2 -->
            <div class="overflow-hidden pb-2 -mb-2">
              <span class="block title-reveal translate-y-full origin-bottom-left text-emerald-400">Reality</span>
            </div>
            <!-- Line 3 -->
            <div class="overflow-hidden pb-4 -mb-4">
              <span class="block title-reveal translate-y-full origin-bottom-left">Architect</span>
            </div>
          </h1>
        </div>
        
        <!-- Right Column: Context & Nav -->
        <div class="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-8 space-y-12">
           
           <div class="hero-stagger opacity-0 translate-y-4">
              <div class="w-12 h-1 bg-emerald-500 mb-6"></div>
              <h2 class="text-xl md:text-2xl font-medium leading-relaxed">
                Blog tentang rekayasa yang mengaburkan batas antara<br class="hidden xl:block">
                <span class="text-emerald-400">seni</span> and <span class="text-emerald-400">kegunaan</span>.
              </h2>
           </div>
           
           <div class="grid grid-cols-2 gap-8 hero-stagger opacity-0 translate-y-4">
             <div>
                <span class="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">Stack Strategy</span>
                <ul class="text-sm font-mono space-y-2 text-neutral-600">
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Nuxt Ecosystem</li>
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Laravel 12</li>
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-neutral-300 rounded-full"></span> Vue.js</li>
                </ul>
             </div>
             
             <div>
                <span class="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">Connect</span>
                 <nav class="flex flex-col gap-2 text-sm font-bold uppercase tracking-wider">
                   <a href="https://github.com/DavinGM" target="_blank" class="group flex items-center gap-2 hover:text-emerald-600 transition-colors">
                     GitHub <span class="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                   </a>
                   <a href="https://x.com/Davingm_dev" target="_blank" class="group flex items-center gap-2 hover:text-emerald-600 transition-colors">
                     X.com <span class="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                   </a>
                 </nav>
             </div>
           </div>

        </div>
      </header>

      <!-- FOCUS GRID (Filling the void with meaning) -->
      <section class="grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 mb-32 section-focus opacity-0">
        
        <!-- Grid Item 1 -->
        <div class="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
          <div class="text-emerald-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mb-4 group-hover:translate-x-1 transition-transform">Utamakan Kinerja</h3>
          <p class="text-neutral-500 leading-relaxed text-sm">
            Optimalisasi obsesif untuk Core Web Vitals. Membangun antarmuka yang bereaksi secara instan terhadap maksud pengguna..
          </p>
        </div>

        <!-- Grid Item 2 -->
        <div class="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
          <div class="text-emerald-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mb-4 group-hover:translate-x-1 transition-transform">Fakta Lapangan</h3>
          <p class="text-neutral-500 leading-relaxed text-sm">
            Mengumpulkan data langsung dari pengguna untuk memahami kebutuhan dan preferensi mereka, serta pengalaman pribadi penulis dalam menyampaikan informasi.
          </p>
        </div>

        <!-- Grid Item 3 -->
        <div class="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
          <div class="text-emerald-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="3.27 6.96" x2="12" y2="12.01"/><line x1="20.73 6.96" x2="12" y2="12.01"/></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mb-4 group-hover:translate-x-1 transition-transform">SEO dan Pemahaman</h3>
          <p class="text-neutral-500 leading-relaxed text-sm">
            SEO dan pemahaman yang mendalam tentang alur pengguna untuk meningkatkan pengalaman pengguna dan efektivitas situs web.
          </p>
        </div>
      </section>

      <!-- MANIFESTO FOOTER -->
      <footer class="grid md:grid-cols-2 gap-12 items-end reveal-footer opacity-0 border-t border-black pt-12">
          <div>
            <NuxtLink to="/blog" aria-label="Baca Blog lebih lanjut" class="inline-flex items-center gap-3 text-2xl md:text-4xl font-black uppercase tracking-tight hover:text-emerald-600 transition-colors cursor-pointer group">
              Baca Blog <span class="transition-transform group-hover:translate-x-2">→</span>
            </NuxtLink>
            <p class="mt-6 text-neutral-500 max-w-sm text-sm font-mono">
              // Akses arsip tulisan teknis dan studi kasus.
            </p>
          </div>

          <div class="md:text-right">
             <blockquote class="text-xl md:text-2xl font-light leading-relaxed">
               "Kami membangun bukan hanya untuk berfungsi,<br> tetapi untuk <span class="bg-emerald-100 text-emerald-800 px-2 italic font-serif font-semibold"> menginspirasi.</span>."
             </blockquote>
             <p class="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-6">
               © 2026 DavinGM Logic.
             </p>
          </div>
      </footer>

    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'DavinGM — Digital Reality Architect',
  description: 'Portfolio and engineering log of DavinGM. Specializing in Nuxt, Vue.js, and high-performance web architecture.',
  keywords: 'Nuxt, Vue, Web Development, Design Systems, Frontend Engineer',
  ogImage: '/images/blog-og.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'DavinGM — Digital Reality Architect',
  twitterDescription: 'Portfolio and engineering log of DavinGM. Specializing in Nuxt, Vue.js, and high-performance web architecture.',
  twitterImage: '/images/blog-og.jpg',
  twitterCreator: '@davingm'
})

const main = ref(null)
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (main.value) {
    ctx = gsap.context(() => {
      
      // 1. Scroll Progress
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrolled / maxScroll) * 100
        const bar = document.getElementById('progress-bar')
        if (bar) bar.style.width = scrollPercent + '%'
      })

      // 2. Hero Reveal
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      
      tl.to('.title-reveal', {
        y: 0,
        duration: 1.8,
        stagger: 0.2,
      })
      .to('.hero-stagger', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
      }, '-=1.2')

      // 3. Focus Grid Reveal
      gsap.from('.section-focus > div', {
        scrollTrigger: {
          trigger: '.section-focus',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        onStart: () => gsap.to('.section-focus', { opacity: 1, duration: 0.5 }) 
      })

      // 4. Footer Reveal
      gsap.to('.reveal-footer', {
        scrollTrigger: {
          trigger: '.reveal-footer',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      })

    }, main.value)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  // Clean up event listener if needed, though mostly handled by component teardown
})
</script>
