<template>
  <footer class="border-t border-neutral-200 bg-white">
    <!-- Newsletter -->
    <div class="bg-neutral-50 border-b border-neutral-200">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="max-w-md mx-auto text-center">
          <h2 class="text-xl font-medium text-black mb-2">Subscribe untuk berlangganan</h2>
          <p class="text-sm text-neutral-600 mb-6">Dapatkan artikel terbaru di inbox Anda</p>
          
          <form @submit.prevent="handleSubscribe" class="flex gap-2">
            <input 
              v-model="email"
              type="email" 
              placeholder="Your email"
              required
              class="flex-1 px-4 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-black"
            />
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-md hover:bg-neutral-800 disabled:opacity-50 transition-colors"
            >
              {{ isSubmitting ? 'Mengirim...' : 'Subscribe' }}
            </button>
          </form>
          
          <p v-if="message" class="text-xs mt-2" :class="isSuccess ? 'text-green-600' : 'text-red-600'">
            {{ message }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <!-- Company -->
        <div>
          <h3 class="text-xs font-semibold text-black uppercase tracking-wider mb-3">Company</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="text-sm text-neutral-600 hover:text-black transition-colors">About</NuxtLink></li>
          </ul>
        </div>

        <!-- Content -->
        <div>
          <h3 class="text-xs font-semibold text-black uppercase tracking-wider mb-3">Content</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/blog" class="text-sm text-neutral-600 hover:text-black transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/authors" class="text-sm text-neutral-600 hover:text-black transition-colors">Authors</NuxtLink></li>
            <li><NuxtLink to="/categories" class="text-sm text-neutral-600 hover:text-black transition-colors">Categories</NuxtLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-xs font-semibold text-black uppercase tracking-wider mb-3">Resources</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/help" class="text-sm text-neutral-600 hover:text-black transition-colors">Help</NuxtLink></li>
            <li><NuxtLink to="/faq" class="text-sm text-neutral-600 hover:text-black transition-colors">FAQ</NuxtLink></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-xs font-semibold text-black uppercase tracking-wider mb-3">Legal</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/License" class="text-sm text-neutral-600 hover:text-black transition-colors">License</NuxtLink></li>
          </ul>
        </div>

      </div>

      <!-- Social & Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-neutral-200">
        <p class="text-xs text-neutral-500">© 2024 Jurnalistik SMK Assalaam Bandung. All rights reserved.</p>
        
<div class="flex flex-wrap gap-6">
          <!-- Github -->
          <a href="https://github.com/NLFTs/Jurnalistik" target="_blank" aria-label="GitHub" class="text-neutral-400 hover:text-black transition-colors transform hover:scale-110">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          <!-- Bluesky -->
          <a href="https://bsky.app/profile/jurnalistik.nlfts.dev" target="_blank" aria-label="Bluesky" class="text-neutral-400 hover:text-black transition-colors transform hover:scale-110">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/></svg>
          </a>

          <!-- X (Twitter) -->
          <a href="https://x.com/jurnalistiksmkassalaam" target="_blank" aria-label="X (Twitter)" class="text-neutral-400 hover:text-black transition-colors transform hover:scale-110">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          
          <!-- Instagram -->
          <a href="https://instagram.com/jurnalistiksmkassalaam" target="_blank" aria-label="Instagram" class="text-neutral-400 hover:text-black transition-colors transform hover:scale-110">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.201 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>

           <!-- Email -->
           <a href="mailto:talk@jurnalistik.nlfts.dev" aria-label="Email" class="text-neutral-400 hover:text-black transition-colors transform hover:scale-110">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const isSuccess = ref(false)

const handleSubscribe = async () => {
  isSubmitting.value = true
  message.value = ''
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSuccess.value = true
  message.value = 'Terima kasih sudah berlangganan!'
  email.value = ''
  
  setTimeout(() => message.value = '', 3000)
  isSubmitting.value = false
}
</script>