<template>
  <div class="blog-card flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm animate-pulse mb-8 break-inside-avoid">
    <!-- Image Skeleton -->
    <div class="w-full aspect-[16/10] bg-neutral-100"></div>

    <!-- Content Skeleton -->
    <div class="p-8 flex flex-col space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-neutral-100"></div>
        <div class="flex flex-col gap-2 flex-1">
          <div class="h-3 w-24 bg-neutral-100 rounded"></div>
          <div class="h-2 w-16 bg-neutral-100 rounded"></div>
        </div>
      </div>

      <div class="space-y-3">
        <div class="h-8 w-full bg-neutral-100 rounded-lg"></div>
        <div class="h-8 w-3/4 bg-neutral-100 rounded-lg"></div>
      </div>

      <div class="space-y-3 pt-2">
        <div class="h-3 w-full bg-neutral-100 rounded"></div>
        <div class="h-3 w-full bg-neutral-100 rounded"></div>
        <div class="h-3 w-2/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  </div>
</template>
