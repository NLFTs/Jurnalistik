export default defineEventHandler((event) => {
  // Return empty response (204 No Content) for /_nuxt or /_nuxt/
  // to avoid 404 being passed to createError as { status: 404 } (missing message).
  setResponseStatus(event, 204)
  return null
})
