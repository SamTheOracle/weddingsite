/* eslint-disable no-console */

import { register } from 'register-service-worker'
const host = 'https://www.giovannaegiacomo.app'
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (reg) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      reg.pushManager.getSubscription()
        .then(sub => {
          var isSubscribed = !(sub === null)

          if (isSubscribed) {
            console.log('User IS subscribed.')
            sessionStorage.setItem('sub', JSON.stringify(sub))
          } else {
            const pKey = 'BCVoxq4sXh_Wk-oScRQbiEK-nhStTRbrrGQ4y0dJx6b0vDDGzZgFnthPAWFBORqGKQrz1UmpizkdGP5ITPtZbFM'
            const newSub = {
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(pKey)
            }
            reg.pushManager.subscribe(newSub).then(newSub => {
              fetch(`${host}/subscriptions`, {
                method: 'post',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(newSub)
              }).then(_ => {
                sessionStorage.setItem('sub', JSON.stringify(newSub))
              })
            }).catch(err => err)
          }
        })
    },
    registered (reg) {
      setInterval(() => {
        reg.update();
      }, 1000 * 60);// e.g. hourly checks
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (reg) {
      console.log('New content is available; please refresh.')
      document.dispatchEvent(new CustomEvent('swUpdated',{detail:reg}));
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
function urlBase64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
