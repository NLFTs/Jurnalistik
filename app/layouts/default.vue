<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <UiNav />

    <!-- Main Content -->
    <main class="pt-16 min-h-[60vh]">
      <div class="max-w-6xl mx-auto px-6">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <UiFoo />
  </div>
</template>


<style scoped>
.router-link-active {
  color: #000;
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: #10b981;
}

/* Subtle hover underline effect */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #000;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active::after {
  width: 100%;
  background: #10b981;
}
</style>