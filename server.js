var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var cors = require('cors')

var app = express()

app.use(cors())
// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
})
