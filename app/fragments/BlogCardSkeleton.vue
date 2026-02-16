<template>
  <div class="blog-card flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm animate-pulse">
    <!-- Image Skeleton -->
    <div class="w-full aspect-[16/10] bg-neutral-200"></div>

    <!-- Content Skeleton -->
    <div class="p-6 flex flex-col flex-grow space-y-4">
      <!-- Author Info Skeleton -->
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-neutral-200"></div>
        <div class="flex flex-col gap-1.5 flex-1">
          <div class="h-3 w-24 bg-neutral-200 rounded"></div>
          <div class="h-2 w-16 bg-neutral-200 rounded"></div>
        </div>
      </div>

      <!-- Title Skeleton -->
      <div class="space-y-2">
        <div class="h-6 w-full bg-neutral-200 rounded"></div>
        <div class="h-6 w-3/4 bg-neutral-200 rounded"></div>
      </div>

      <!-- Description Skeleton -->
      <div class="space-y-2 flex-grow pt-2">
        <div class="h-3 w-full bg-neutral-200 rounded"></div>
        <div class="h-3 w-full bg-neutral-200 rounded"></div>
        <div class="h-3 w-2/3 bg-neutral-200 rounded"></div>
      </div>

      <!-- Footer Skeleton -->
      <div class="pt-4 border-t border-neutral-50 flex justify-between mt-auto">
        <div class="h-3 w-20 bg-neutral-200 rounded"></div>
        <div class="h-3 w-24 bg-neutral-200 rounded"></div>
      </div>
    </div>
  </div>
</template>
