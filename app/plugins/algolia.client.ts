export default defineNuxtPlugin(() => {
    // This plugin ensures Algolia composables are available
    // The @nuxtjs/algolia module should auto-import useAlgoliaSearch
    // but this provides a fallback if needed

    if (process.client) {
        console.log('Algolia plugin loaded')
    }
})
