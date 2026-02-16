export default defineEventHandler((event) => {
    // Silence "404 Not Found" errors for the root asset directory
    if (event.path === '/_nuxt/' || event.path === '/_nuxt') {
        // Return empty content successfully (200 OK or 204 No Content) to stop Nuxt from logging an error
        setResponseStatus(event, 204)
        return ''
    }
})
