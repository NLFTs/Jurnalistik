<template>
  <div class="py-16 md:py-24 bg-white px-4">
    
    <div class="max-w-6xl mx-auto mb-16">
      <h1 class="text-5xl md:text-7xl font-black text-black leading-tight tracking-tighter mb-4">
        Our <span class="text-emerald-500">Authors</span>
      </h1>
      <p class="text-lg text-neutral-500">
        Tim penulis yang berkontribusi dalam jurnal ini
      </p>
    </div>

    <div class="max-w-6xl mx-auto space-y-12">
      
      <article 
        v-for="(author, index) in authors" 
        :key="index"
        class="flex flex-col md:flex-row gap-8 p-8 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors duration-300 border border-transparent hover:border-neutral-200"
      >
        <div class="flex-shrink-0">
          <div :class="['w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br', author.gradient]">
            <img 
              :src="author.image" 
              :alt="author.name"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div class="flex-1 space-y-4">
          <div>
            <h2 class="text-3xl font-bold text-black mb-2">{{ author.name }}</h2>
            <p class="text-emerald-600 font-medium">{{ author.role }}</p>
          </div>

          <p class="text-neutral-600 leading-relaxed">
            {{ author.bio }}
          </p>

          <div class="flex flex-wrap gap-6 pt-4 border-t border-neutral-200">
            <div>
              <p class="text-xs text-neutral-400 uppercase tracking-wider mb-1">Artikel</p>
              <p class="text-2xl font-bold text-black">{{ author.articles }}</p>
            </div>
            <div>
              <p class="text-xs text-neutral-400 uppercase tracking-wider mb-1">Bergabung</p>
              <p class="text-lg font-medium text-black">{{ author.joined }}</p>
            </div>
            <div>
              <p class="text-xs text-neutral-400 uppercase tracking-wider mb-1">Website</p>
              <template v-if="author.website">
                <a 
                  :href="'https://' + author.website" 
                  target="_blank" 
                  class="text-lg font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group"
                >
                  {{ author.website }}
                  <svg class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </template>
              <p v-else class="text-lg font-medium text-neutral-400">—</p>
            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
</template>

<script setup>
// Data Author disimpan dalam array of objects
const authors = [
  {
    name: "Davin Gahisan Mustafid",
    role: "Founder NLFTs · Lead Developer",
    bio: "Seorang Frontend engineer dengan passion dalam web development modern dan arsitektur software dalam membangun aplikasi web skala besar menggunakan Vue.js, Nuxt, dan ekosistem JavaScript modern.",
    image: "https://avatars.githubusercontent.com/u/228851591?v=4",
    gradient: "from-emerald-400 to-emerald-600",
    articles: 2,
    joined: "Feb 2026",
    website: "davingm.com"
  },
  {
    name: "Ilman Abidullah",
    role: "Jurnalistik - NLFTs",
    bio: "Jurnalis yang berpengalaman dalam Menganalisi kejadian secara realtime dan akurat serta ahli dalam melakukan riset dan ujicoba serta survei sebelum menerbitkan karya",
    image: "https://avatars.githubusercontent.com/u/228839961?v=4",
    gradient: "from-blue-400 to-blue-600",
    articles: 0,
    joined: "Feb 2026",
    website: "ilmanwrites.nlfts.dev"
  },
//   {
//     name: "Erga Praditya Nugraha",
//     role: "DevOps Engineer · Cloud Architect",
//     bio: "DevOps specialist dengan expertise dalam cloud infrastructure, CI/CD, dan containerization. Passionate tentang automation dan best practices dalam deployment.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
//     gradient: "from-purple-400 to-purple-600",
//     articles: 15,
//     joined: "Jun 2023",
//     website: "alexchen.tech"
//   },
//   {
//     name: "Maria Rodriguez",
//     role: "UI/UX Designer · Frontend Developer",
//     bio: "Designer dan developer dengan fokus pada user interface dan user experience. Ahli dalam design systems dan component-driven development.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
//     gradient: "from-orange-400 to-orange-600",
//     articles: 12,
//     joined: "Aug 2023",
//     website: null
//   }
];

// Nuxt SEO Meta (Tetap dipertahankan)
useSeoMeta({
  title: 'Authors',
  description: 'Tim penulis yang berkontribusi dalam jurnal NLFTs',
  ogTitle: 'Authors | NLFTs',
  ogDescription: 'Tim penulis yang berkontribusi dalam jurnal NLFTs',
})
</script>

<style scoped>
/* CSS Manual untuk hover effect yang lebih halus jika diperlukan */
.author-card {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>