module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: '#F7F9E4',
    name: 'Giovanna&Giacomo',
    manifestOptions: {
      start_url: '/',
      background_color: '#F7F9E4',
      short_name: 'G&G',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
    }
  }
}
