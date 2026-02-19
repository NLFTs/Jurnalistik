<template>
  <header class="navbar">
    <nav class="navbar-container">
      <div class="navbar-content">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <span class="logo-text">Jurnalistik</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">
            Home
          </NuxtLink>
          <NuxtLink to="/blog" class="nav-link">
            Blog
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link">
            About
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="nav-actions">
          <button 
            class="search-button group"
            @click="toggleSearch"
            aria-label="Search"
          >
            <span class="search-icon-wrapper group-hover:bg-neutral-100 transition-colors rounded-full p-2">
              <svg class="icon w-5 h-5 text-neutral-600 group-hover:text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button 
            class="menu-toggle"
            @click="toggleMobileMenu"
            aria-label="Menu"
          >
            <svg v-if="!isMobileMenuOpen" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="mobile-nav">
          <NuxtLink 
            to="/" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            About
          </NuxtLink>
        </div>
      </Transition>
    </nav>

    <Transition name="search">
      <div v-if="isSearchOpen" class="search-overlay" @click="closeSearch">
        <div class="search-modal" @click.stop>
          <div class="search-header">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              ref="searchInput"
              type="text" 
              class="search-input"
              placeholder="Search articles..."
              v-model="searchQuery"
              @keydown.esc="closeSearch"
              @keydown.down.prevent="navigateResults(1)"
              @keydown.up.prevent="navigateResults(-1)"
              @keydown.enter="selectResult"
            />
            <button class="search-close-btn" @click="closeSearch">ESC</button>
          </div>

          <div class="search-body custom-scrollbar">
            <!-- Loading State -->
            <div v-if="requesting" class="search-state">
              <div class="loader-spinner"></div>
              <p>Searching articles...</p>
            </div>

            <!-- Results List -->
            <div v-else-if="result && result.hits.length > 0" class="search-results-list">
              <div class="results-group-label" v-if="searchQuery">Search Results</div>
              <NuxtLink 
                v-for="(hit, index) in result.hits" 
                :key="hit.objectID"
                :to="hit.path" 
                class="search-hit-item"
                :class="{ 'is-active': activeIndex === index }"
                @mouseenter="activeIndex = index"
                @click="closeSearch"
              >
                <div class="hit-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div class="hit-content">
                  <h4 class="hit-title">{{ hit.title }}</h4>
                  <p class="hit-description">{{ hit.description }}</p>
                </div>
                <div class="hit-action">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </NuxtLink>
            </div>

            <!-- Empty State -->
            <div v-else-if="searchQuery.length > 2" class="search-state">
              <p>No results found for "<strong>{{ searchQuery }}</strong>"</p>
            </div>
            
            <!-- Initial State -->
            <div v-else-if="!searchQuery" class="search-state initial">
              <p>Type to start searching...</p>
            </div>
          </div>

          <!-- Footer -->
          <div class="search-footer">
            <div class="search-commands">
              <div class="command-item"><span class="kbd">↵</span> select</div>
              <div class="command-item"><span class="kbd">↓</span><span class="kbd">↑</span> navigate</div>
            </div>
            <div class="powered-by">
              <span>Search by</span>
              <a href="https://www.algolia.com" target="_blank" rel="noopener" class="algolia-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#003dff" d="M14.561 49.429C6.604 49.429.117 55.845.002 63.776C-.115 71.83 6.42 78.504 14.475 78.551a14.46 14.46 0 0 0 7.011-1.75a.34.34 0 0 0 .063-.554l-1.362-1.208a.96.96 0 0 0-1.012-.17a11.8 11.8 0 0 1-4.762.934c-6.51-.08-11.768-5.495-11.664-12.004c.102-6.426 5.362-11.622 11.812-11.622h11.813v20.998L19.67 67.22a.494.494 0 0 0-.724.076a5.49 5.49 0 0 1-4.775 2.176c-2.7-.186-4.888-2.36-5.09-5.06a5.5 5.5 0 0 1 5.478-5.916a5.5 5.5 0 0 1 5.474 5.01a.98.98 0 0 0 .321.647l1.746 1.548a.341.341 0 0 0 .561-.192c.126-.674.17-1.375.12-2.094c-.28-4.1-3.601-7.398-7.702-7.65c-4.703-.29-8.634 3.388-8.759 8c-.121 4.493 3.56 8.366 8.055 8.465a8.2 8.2 0 0 0 5.02-1.57l8.758 7.763a.582.582 0 0 0 .968-.435V49.983a.553.553 0 0 0-.553-.553zm62.026 6.104h-2.875c-2.819 0-5.299 1.485-6.746 3.736a8.43 8.43 0 0 0-1.34 4.588c0 .319.018.65.054.967a8.38 8.38 0 0 0 2.953 5.51q.256.226.542.415a4.69 4.69 0 0 0 5.402-.145c.95-.675 1.683-1.664 2.01-2.783v2.929h-.007v.646c0 1.273-.333 2.23-1.01 2.877q-1.017.968-3.395.969c-.649 0-1.678-.035-2.716-.14a.346.346 0 0 0-.366.245l-.745 2.513c-.06.202.074.41.282.439c1.254.18 2.478.273 3.185.273q4.273 0 6.346-1.878c1.252-1.131 1.932-2.85 2.052-5.159V55.877a.344.344 0 0 0-.344-.344zm0 3.736s.038 8.109 0 8.355c-.704.57-1.58.792-2.535.857l-.028.002a4 4 0 0 1-.425 0c-2.356-.123-4.344-2.171-4.344-4.626c0-.598.114-1.166.316-1.69c.654-1.696 2.26-2.898 4.142-2.898h2.875zm47.787-3.736h-2.875c-2.819 0-5.299 1.485-6.746 3.736a8.46 8.46 0 0 0-1.34 4.589a8.4 8.4 0 0 0 3.007 6.475q.256.227.542.416a4.7 4.7 0 0 0 2.81.78l.062-.004l.153-.012l.059-.007q.08-.008.16-.02l.036-.006c1.917-.295 3.588-1.796 4.132-3.66v3.37c0 .19.154.344.344.344h2.938c.19 0 .344-.154.344-.344V55.877a.344.344 0 0 0-.344-.344zm0 12.06c-.711.592-1.63.815-2.613.881q-.015 0-.029.003q-.097.006-.196.005c-2.462 0-4.495-2.091-4.495-4.626c0-.597.115-1.166.316-1.689c.654-1.697 2.26-2.899 4.142-2.899h2.875zm-72.245-12.06h-2.875c-2.819 0-5.299 1.485-6.746 3.736a8.46 8.46 0 0 0-1.34 4.589a8.4 8.4 0 0 0 3.007 6.475q.256.227.542.416a4.7 4.7 0 0 0 2.81.78l.062-.004l.153-.012l.059-.007l.16-.02l.036-.006c1.917-.295 3.588-1.796 4.132-3.66v3.37c0 .19.154.344.344.344h2.939c.19 0 .343-.154.343-.344V55.877a.344.344 0 0 0-.343-.344zm0 12.06c-.711.592-1.63.815-2.613.881q-.015 0-.029.003q-.097.006-.196.005c-2.462 0-4.495-2.091-4.495-4.626c0-.597.115-1.166.316-1.689c.654-1.697 2.26-2.899 4.142-2.899h2.875zm42.985-9.846a6.6 6.6 0 0 0-2.377-1.65q-1.39-.572-3.035-.574c-1.094 0-2.107.185-3.026.574a7 7 0 0 0-2.375 1.65q-1.003 1.068-1.56 2.567c-.372 1-.538 2.178-.538 3.4a8.6 8.6 0 0 0 .556 3.16c.372 1.01.883 1.872 1.542 2.586a6.9 6.9 0 0 0 2.366 1.659c.92.398 2.338.602 3.054.61c.714 0 2.144-.222 3.072-.61a6.8 6.8 0 0 0 2.376-1.66q.989-1.07 1.53-2.585c.363-1.01.539-1.936.539-3.16c0-1.222-.195-2.4-.585-3.4c-.372-1.001-.882-1.854-1.54-2.567zm-2.59 9.544c-.668.918-1.606 1.381-2.802 1.381c-1.198 0-2.135-.454-2.804-1.38c-.668-.919-1.003-1.983-1.003-3.568c0-1.567.326-2.864.995-3.78c.667-.919 1.605-1.371 2.801-1.371c1.198 0 2.135.453 2.803 1.37c.669.908 1.012 2.214 1.012 3.781c0 1.585-.333 2.64-1.002 3.567m10.288-1.817v-15.7a.344.344 0 0 0-.397-.34l-2.94.462a.345.345 0 0 0-.292.34l.01 15.925c0 .753 0 5.403 5.594 5.565a.345.345 0 0 0 .355-.344v-2.377a.34.34 0 0 0-.299-.34c-2.031-.234-2.031-2.773-2.031-3.19zm5.115-11.885h2.959c.19 0 .344-.153.344-.343v-3.473a.344.344 0 0 0-.398-.34l-2.959.464a.344.344 0 0 0-.29.34v3.008c0 .19.153.344.343.344zm0 1.944h2.96c.19 0 .343.153.343.344v15.509c0 .19-.153.344-.344.344h-2.96a.343.343 0 0 1-.343-.344V55.877c0-.19.153-.344.344-.344m-45.542 9.941v-15.7a.344.344 0 0 0-.398-.34l-2.94.462a.345.345 0 0 0-.292.34l.01 15.925c0 .753 0 5.403 5.594 5.565a.345.345 0 0 0 .355-.344v-2.377a.34.34 0 0 0-.299-.34c-2.03-.234-2.03-2.773-2.03-3.19z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

// Initialize Algolia search with proper error handling
const result = ref({ hits: [] })
const requesting = ref(false)

// Search function that handles Algolia or falls back gracefully
const performSearch = async (query) => {
  try {
    // Try to use Algolia search
    const { search } = useAlgoliaSearch('blog_posts')
    const searchResult = await search({ query })
    return searchResult
  } catch (error) {
    console.warn('Algolia search error:', error)
    return { hits: [] }
  }
}


const isMobileMenuOpen = ref(false)
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const activeIndex = ref(0)

const navigateResults = (direction) => {
  if (!result.value?.hits?.length) return
  const total = result.value.hits.length
  activeIndex.value = (activeIndex.value + direction + total) % total
}

const selectResult = () => {
  if (result.value?.hits?.[activeIndex.value]) {
    const path = result.value.hits[activeIndex.value].path
    closeSearch()
    useRouter().push(path)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isSearchOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    isMobileMenuOpen.value = false
    await nextTick()
    searchInput.value?.focus()
  }
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
}

// Watch search query and trigger search
watch(searchQuery, async (query) => {
  activeIndex.value = 0
  if (query.length > 2) {
    requesting.value = true
    try {
      const searchResult = await performSearch(query)
      result.value = searchResult
    } finally {
      requesting.value = false
    }
  } else {
    result.value = { hits: [] }
  }
})

// Global keyboard shortcuts
const handleGlobalKeys = (e) => {
  // Ctrl+K or Cmd+K to open search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    toggleSearch()
  }

  // Escape to close everything
  if (e.key === 'Escape') {
    closeMobileMenu()
    closeSearch()
  }
}

onMounted(() => {
  // Entrance animation
  gsap.from('.navbar', {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  })

  document.addEventListener('keydown', handleGlobalKeys)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeys)
})
</script>

<style scoped>
/* ============================================
   LOGO STYLING - ELEGANT, MODERN & EYE-CATCHING
   ============================================ */

.logo {
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: translateY(-1px);
}

.logo-text {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 26px;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: -0.04em;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

/* Accent Dot - Signature Emerald Mark */
.logo-text::after {
  content: '.';
  color: #059669;
  font-size: 32px;
  font-weight: 900;
  -webkit-text-fill-color: #059669;
  text-shadow: 0 0 12px rgba(5, 150, 105, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    text-shadow: 0 0 12px rgba(5, 150, 105, 0.4);
  }
  50% {
    text-shadow: 0 0 20px rgba(5, 150, 105, 0.6);
  }
}

/* Subtle Underline Effect */
.logo::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #059669, #047857);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover::before {
  width: 100%;
}

/* Hover Effects */
.logo:hover .logo-text {
  background: linear-gradient(135deg, #059669 0%, #047857 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Logo */
@media (max-width: 640px) {
  .logo-text {
    font-size: 22px;
  }
  
  .logo-text::after {
    font-size: 28px;
  }
}

/* ============================================
   NAVBAR BASE STYLES
   ============================================ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

/* ============================================
   NAVIGATION LINKS
   ============================================ */

.nav-links {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: #525252;
  text-decoration: none;
  transition: color 0.3s ease;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  color: #0a0a0a;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #059669;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #0a0a0a;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  width: 100%;
}

/* ============================================
   RIGHT ACTIONS (SEARCH & MOBILE MENU)
   ============================================ */

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-button,
.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #737373;
  cursor: pointer;
  transition: color 0.2s ease;
}

.search-button:hover,
.menu-toggle:hover {
  color: #0a0a0a;
}

.menu-toggle {
  display: flex;
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
}

.icon {
  width: 20px;
  height: 20px;
}

/* ============================================
   MOBILE NAVIGATION
   ============================================ */

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid #e5e5e5;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

.mobile-nav-link {
  padding: 0.75rem 0;
  font-size: 15px;
  font-weight: 400;
  color: #737373;
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: #0a0a0a;
}

/* Mobile Menu Transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 300px;
}

/* ============================================
   SEARCH MODAL STYLES
   ============================================ */

.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
}

.search-modal {
  width: 100%;
  max-width: 640px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
}

.search-header {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f1f5f9;
  position: relative;
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #64748b;
  margin-right: 0.75rem;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #0f172a;
  background: transparent;
  padding: 0;
}

.search-close-btn {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.search-body {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
}

.search-state {
  padding: 3rem 1rem;
  text-align: center;
  color: #64748b;
  font-size: 14px;
}

.search-state.initial {
  padding: 4rem 1rem;
}

.results-group-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  padding: 0.75rem 1rem 0.5rem;
}

.search-hit-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-bottom: 2px;
  background: transparent;
}

.search-hit-item:hover,
.search-hit-item.is-active {
  background: #f8fafc;
}

.search-hit-item.is-active {
  background: #05966910;
}

.hit-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  color: #64748b;
  border-radius: 6px;
  margin-right: 1rem;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.search-hit-item.is-active .hit-icon {
  background: #059669;
  color: #ffffff;
}

.hit-content {
  flex: 1;
}

.hit-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

.hit-description {
  font-size: 12px;
  color: #64748b;
  margin: 2px 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hit-action {
  color: #cbd5e1;
  width: 18px;
  height: 18px;
  opacity: 0;
  transition: all 0.2s ease;
}

.search-hit-item.is-active .hit-action {
  opacity: 1;
  color: #059669;
  transform: translateX(4px);
}

.search-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #f1f5f9;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-commands {
  display: flex;
  gap: 1rem;
}

.command-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 11px;
  color: #64748b;
}

.kbd {
  font-family: inherit;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 1px 4px;
  font-weight: 600;
  min-width: 16px;
  text-align: center;
}

.powered-by {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 11px;
  color: #94a3b8;
}

.algolia-link {
  display: flex;
  align-items: center;
  color: #5468ff;
  transition: opacity 0.2s;
}

.algolia-link:hover {
  opacity: 0.8;
}

.algolia-logo-svg {
  height: 14px;
  width: auto;
}

/* Spinner Loader */
.loader-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e2e8f0;
  border-top-color: #059669;
  border-radius: 50%;
  margin: 0 auto 0.75rem;
  animation: spin 0.8s linear infinite;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

/* Search Transition */
.search-enter-active,
.search-leave-active {
  transition: all 0.2s ease-out;
}

.search-enter-from,
.search-leave-to {
  opacity: 0;
}

.search-enter-from .search-modal,
.search-leave-to .search-modal {
  transform: scale(0.95) translateY(-10px);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>