<template>
  <div ref="helpMain" class="py-20 md:py-32 bg-white">
    <!-- Header -->
    <header class="mb-20">
      <h1 class="text-6xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter mb-6">
        Need<br>
        <span class="text-emerald-500">Help?</span>
      </h1>
      <p class="text-xl text-neutral-500 mt-6">
        Kami di sini untuk membantu Anda
      </p>
    </header>

    <!-- Content -->
    <div class="max-w-3xl space-y-16">
      
      <!-- Email -->
      <section class="help-card">
        <h2 class="text-2xl font-bold text-black mb-4">Email</h2>
        <p class="text-neutral-600 mb-4">
          Kirim email ke kami untuk pertanyaan atau bantuan
        </p>
        <a href="mailto:talk@jurnalistik.nlfts.dev" class="text-emerald-600 hover:text-emerald-700 font-mono">
          talk@jurnalistik.nlfts.dev
        </a>
      </section>

      <!-- Documentation -->
      <section class="help-card">
        <h2 class="text-2xl font-bold text-black mb-4">Documentation</h2>
        <p class="text-neutral-600 mb-4">
          Baca dokumentasi lengkap tentang cara menggunakan platform
        </p>
        <NuxtLink to="/blog" class="text-emerald-600 hover:text-emerald-700 font-mono">
          Lihat Blog →
        </NuxtLink>
      </section>


    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'

const helpMain = ref(null)
let ctx

useSeoMeta({
  title: 'Help',
  description: 'Butuh bantuan? Hubungi kami atau baca FAQ',
  ogTitle: 'Help | NLFTs',
  ogDescription: 'Butuh bantuan? Hubungi kami atau baca FAQ',
})

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    if (helpMain.value) {
      ctx = gsap.context(() => {
        gsap.from('.help-card', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out'
        })
      }, helpMain.value)
    }
  }, 100)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>