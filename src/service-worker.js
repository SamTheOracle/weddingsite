/* eslint-disable no-undef */
/* eslint-disable no-undef */
workbox.routing.registerRoute('/', new workbox.strategies
  .NetworkFirst({
    cacheName: 'wedding_gg_cache'
  }))
workbox.routing.registerRoute(new RegExp(/.*\/comments/), new workbox.strategies
  .NetworkFirst({
    cacheName: 'wedding_gg_cache'
  }))

workbox.core.setCacheNameDetails({ prefix: 'gg-cache' })

self.addEventListener('push', event => {
  if (event.data) {
    var notification = event.data.json()
    const title = notification.title
    const options = {
      body: 'Ciao qualcuno ha scritto un nuovo commento',
      icon: './img/icons/android-chrome-96x96.png',
      badge: './img/icons/android-chrome-96x96.png'
    }
    self.registration.showNotification(title, options)
  } else {
    console.log('Push event but no data')
  }
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
