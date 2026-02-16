<template>
  <div class="flex items-center gap-2">
    <button @click="copyLink" class="p-2 rounded-full hover:bg-neutral-100 transition-colors tooltip" aria-label="Copy Link" title="Salin Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-neutral-600">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <a :href="twitterUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Share on X" title="Share ke X">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-neutral-600">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Share on WhatsApp" title="Share ke WhatsApp Status">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-neutral-600">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </a>

     <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Share on Instagram" title="Ke Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String
})

const twitterUrl = computed(() => {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.title)}&url=${encodeURIComponent(props.url)}`
})

const whatsappUrl = computed(() => {
  return `https://wa.me/?text=${encodeURIComponent(props.title + ' ' + props.url)}`
})

// Instagram doesn't support direct web sharing like Twitter/WA, usually people just open the app.
// Or we could link to user's profile if specified. For now, linking to main instagram URL or a 'create' endpoint if available (it isn't really).
// Best practice for "Share to Instagram" on web is usually just copying the link or opening the app.
const instagramUrl = computed(() => 'https://instagram.com') 

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    alert('Link disalin ke clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>
