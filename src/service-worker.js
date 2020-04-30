/* eslint-disable no-undef */
/* eslint-disable no-undef */
workbox.routing.registerRoute('/', new workbox.strategies
  .NetworkFirst({
    cacheName: 'gg-cache'
  }))
workbox.routing.registerRoute(new RegExp(/.*\/comments\/all/), new workbox.strategies
  .NetworkFirst({
    cacheName: 'wedding_gg_cache'
  }))

workbox.core.setCacheNameDetails({ prefix: 'gg-cache' })

self.addEventListener('push', event => {
  const promise = mergeNotifications(self.registration, event)
  event.waitUntil(promise)
  console.log(promise)
})

self.addEventListener('notificationclick', event => {
  const urlToOpen = new URL('/', self.location.origin).href
  console.log(urlToOpen)
  const promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then((windowClients) => {
    let matchingClient = null

    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i]
      if (windowClient.url === urlToOpen) {
        matchingClient = windowClient
        break
      }
    }
    if (matchingClient) {
      return matchingClient.focus()
    } else {
      return clients.openWindow(urlToOpen)
    }
  }).then(() => self.registration.getNotifications().then(notifications =>
    notifications.forEach(n => n.close())
  )).catch(err => err)

  event.waitUntil(promiseChain)
})
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

function mergeNotifications (registration, event) {
  const promiseChain = registration.getNotifications()
    .then(notifications => {
      let currentNotification

      for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].body) {
          currentNotification = notifications[i]
        }
      }
      console.log(currentNotification)
      return currentNotification
    })
    .then((currentNotification) => {
      let notificationTitle
      const options = {
        icon: './img/icons/android-chrome-96x96.png',
        badge: './img/icons/ioegiovi.svg'
      }

      if (currentNotification && currentNotification.data) {
        // We have an open notification, let's do something with it.
        const commentCount = currentNotification.data.commentCount + 1

        options.body = `Ci sono ${commentCount} commenti da vedere`
        options.data = {
          commentCount: commentCount
        }
        notificationTitle = 'Nuovi commenti degli invitati'

        // Remember to close the old notification.
        currentNotification.close()
      } else if (event.data) {
        var notification = event.data.json()
        notificationTitle = `Nuovo commento da ${notification.firstName} ${notification.lastName}`
        options.body = `${notification.comment}`
        options.data = {
          commentCount: 1
        }
      }
      return { title: notificationTitle, options: options }
    }).then(notification => isClientFocused())
    .then(clientFocused => {
      if (!clientFocused) {
        return registration.showNotification(
          notification.title,
          notification.options
        )
      } else {
        return clients.matchAll({
          type: 'window',
          includeUncontrolled: true
        }).then(windowClients => {
          windowClients.forEach((windowClient) => {
            windowClient.postMessage({
              comment: notification
            })
          })
        })
      }
    })
  return promiseChain
}

function isClientFocused () {
  return clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then((windowClients) => {
    let clientIsFocused = false

    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i]
      if (windowClient.focused) {
        clientIsFocused = true
        break
      }
    }

    return clientIsFocused
  })
}
