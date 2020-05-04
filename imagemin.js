const imagemin = require('imagemin')
const JPEGImages = 'src/assets/original/*.jpg'
const output = 'src/assets/compressed'
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(
    [JPEGImages, output],
    {
      destination: 'src/assets/us_desktop',
      plugins: [imageminMozjpeg({ quality: 40 })]
    }
  )
  console.log(files)
})()
