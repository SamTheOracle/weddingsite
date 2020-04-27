/* eslint-disable no-undef */
/* eslint-disable no-undef */
workbox.routing.registerRoute('/', new workbox.strategies
  .NetworkFirst({
    cacheName: dynamic_cache
  }))

workbox.core.setCacheNameDetails({ prefix: 'gg-cache' })

self.addEventListener('install', () => {
  self.skipWaiting()
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
