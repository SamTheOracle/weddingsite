var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var app = express()
var DatabaseService = require('./database/dbservice')
var webpush = require('web-push')
var bodyParser = require('body-parser')
var moment = require('moment-timezone')
moment.locale('it')
webpush.setVapidDetails('mailto:zanotti.giacomo93@gmail.com', 'BCVoxq4sXh_Wk-oScRQbiEK-nhStTRbrrGQ4y0dJx6b0vDDGzZgFnthPAWFBORqGKQrz1UmpizkdGP5ITPtZbFM', 'eZoTr-5RIlo58t3gmccfA76SYCTjTcHL3yoEC31rZI0')

const DBURL = 'mongodb+srv://gzanotti:metallaro93@cluster0-heyw8.mongodb.net/wedding_db?retryWrites=true&w=majority'
const DBNAME = 'wedding_db'

const dbService = new DatabaseService(DBURL, DBNAME)

// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
/*
firstName:string
lastName:string,
comment:string,
rate:number,
subscription:PushSubscription,
date
*/

app.post('/comments', (req, res) => {
  const comment = req.body
  comment.date = moment.tz('Europe/Rome').format()

  dbService.insertData('comments', comment)
    .catch(err => res.status(400).json(err))
    .then(commentCreated => {
      res.status(201).json(commentCreated)
      return commentCreated
    })
    .then(comment => {
      /* const filter = {
        $not: {
          endpoint: comment.subscription.endpoint
        }
      } */
      dbService.findData('subscriptions', {}, true)
        .then(subs => subs.filter(sub => sub.enpoint !== comment.subscription).forEach(sub => {
          webpush.sendNotification(sub, JSON.stringify(comment)).catch(err => console.log(err))
        })).catch(err => console.log('subs error', err))
    })
})

app.get('/comments/all', (req, res) => {
  dbService.findData('comments', {})
    .then(comments => {
      res.status(200).json(comments)
    }).catch(err => res.status(400).json(err))
})
app.get('/test', (req, res) => {
  res.status(200).json('ciao')
})
app.post('/subscriptions', (req, res) => {
  const sub = req.body
  dbService.insertData('subscriptions', sub)
    .then(subCreated => {
      res.status(201).json(subCreated)
    })
    .catch(err => res.status(400).json(err))
})

var port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
})
