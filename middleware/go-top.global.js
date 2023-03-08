export default defineNuxtRouteMiddleware(() => {
  if (process.server) return

  window.scrollTo(0, 0)
})
