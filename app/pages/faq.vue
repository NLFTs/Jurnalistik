<template>
  <div ref="faqMain" class="py-16 md:py-24 bg-white">
    
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto mb-20 text-center">
      <div class="inline-block mb-4">
        <span class="text-xs font-mono text-emerald-600 uppercase tracking-widest">FAQ</span>
      </div>
      <h1 class="text-5xl md:text-7xl font-black text-black mb-6 leading-tight">
        Frequently Asked<br>Questions
      </h1>
      <p class="text-lg text-neutral-500 max-w-2xl mx-auto">
        Temukan jawaban untuk pertanyaan yang sering diajukan tentang Blog ini
      </p>
    </div>

    <!-- FAQ Grid -->
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      
      <!-- FAQ Item 1 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(0)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Apa Maksud Blog ni?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 0 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 0" class="mt-4 text-neutral-600 leading-relaxed">
                Blog ini adalah pusat berbagi pengetahuan, tutorial, dan catatan teknis seputar pengembangan teknologi dan kreativitas digital. TUjuannya untuk mendokumentasikan proses belajar dan memberikan panduan praktis yang bisa langsung diterapkan oleh pembaca.
            </div>
          </Transition>
        </button>
      </div>

      <!-- FAQ Item 2 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(1)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Apakah Blog ini valid?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 1 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 1" class="mt-4 text-neutral-600 leading-relaxed">
            Informasi yang dibagikan didasarkan pada pengalaman praktis, dokumentasi resmi teknologi terkait, dan riset mandiri. Namun, karena teknologi berkembang sangat cepat, kami menyarankan pembaca untuk selalu melakukan verifikasi ulang dan menyesuaikan dengan kebutuhan spesifik masing-masing. (Silakan baca bagian Disclaimer).
            </div>
          </Transition>
        </button>
      </div>

      <!-- FAQ Item 3 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(2)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Apakah Boleh di shere?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 2 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 2" class="mt-4 text-neutral-600 leading-relaxed">
              Tentu saja! Kami sangat senang jika konten di sini bermanfaat bagi orang lain. Anda bebas membagikan tautan (link) blog ini ke komunitas atau media sosial Anda. Kami hanya meminta untuk tetap mencantumkan sumber asli sebagai bentuk apresiasi terhadap penulis.
            </div>
          </Transition>
        </button>
      </div>

      <!-- FAQ Item 4 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(3)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Target Blog ini untuk siapa?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 3 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 3" class="mt-4 text-neutral-600 leading-relaxed">
                Blog ini dirancang untuk:
                Pemula yang ingin memulai karier atau hobi di bidang teknologi.
                Developer & Kreator yang sedang mencari solusi teknis atau inspirasi proyek.
                Anggota Komunitas NLFTs yang ingin memperdalam materi yang dibahas di dalam komunitas.
            </div>
          </Transition>
        </button>
      </div>

      <!-- FAQ Item 5 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(4)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Bagaimana support-nya?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 4 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 4" class="mt-4 text-neutral-600 leading-relaxed">
                Jika Anda memiliki pertanyaan mengenai konten blog atau menemukan kendala teknis dalam tutorial yang kami bagikan, Anda bisa bertanya melalui kolom komentar atau bergabung di grup diskusi
            </div>
          </Transition>
        </button>
      </div>

      <!-- FAQ Item 6 -->
      <div class="faq-item group">
        <button 
          @click="toggleFaq(5)" 
          class="w-full text-left p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 rounded-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-bold text-black pr-4">
              Apakah open source?
            </h3>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-emerald-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 5 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <Transition name="faq-content">
            <div v-if="openFaq === 5" class="mt-4 text-neutral-600 leading-relaxed">
            Ya! Kode sumber dari web blog ini (dan sebagian besar proyek di dalamnya) bersifat Open Source. Kami sangat terbuka terhadap kontribusi seperti perbaikan typo, penambahan konten, atau peningkatan fitur melalui repositori GitHub kami.
            </div>
          </Transition>
        </button>
      </div>

    </div>

    <!-- CTA Section -->
    <div class="max-w-4xl mx-auto mt-20 text-center">
      <div class="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
        <h2 class="text-2xl md:text-3xl font-bold text-black mb-4">
          Masih ada pertanyaan?
        </h2>
        <p class="text-neutral-600 mb-6">
          Jangan ragu untuk menghubungi kami langsung
        </p>
        <a 
          href="https://nlfts.vercel.app/connected/discord" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          Temui Kami di Discord
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

const faqMain = ref(null)
const openFaq = ref(null)
let ctx

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

useSeoMeta({
  title: 'FAQ',
  description: 'Pertanyaan yang sering diajukan tentang NLFTs dan layanan kami',
  ogTitle: 'FAQ | NLFTs',
  ogDescription: 'Pertanyaan yang sering diajukan tentang NLFTs dan layanan kami',
})

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    if (faqMain.value) {
      ctx = gsap.context(() => {
        gsap.from('.faq-item', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out'
        })
      }, faqMain.value)
    }
  }, 100)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.faq-content-enter-active,
.faq-content-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-content-enter-from,
.faq-content-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.faq-content-enter-to,
.faq-content-leave-from {
  opacity: 1;
  max-height: 500px;
  margin-top: 1rem;
}
</style>