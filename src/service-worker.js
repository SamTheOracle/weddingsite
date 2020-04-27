/* eslint-disable no-undef */

workbox.routing.registerNavigationRoute('/')

workbox.core.setCacheNameDetails({ prefix: 'whoisatdinner-frontend' })

self.addEventListener('install', () => {
  self.skipWaiting()
})
/* self.addEventListener('activate', event => {
    event.waitUntil(clients.claim())
})
 */

self.addEventListener('push', function (event) {
  if (event.data) {
    var notification = event.data.json()
    const title = notification.title
    const options = {
      body: notification.description,
      icon: './img/icons/android-chrome-96x96.png',
      badge: './img/tray.a7f4e3f3.svg'
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
