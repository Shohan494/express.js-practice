var express = require('express')
var router = express.Router()

// middleware that is specific to this router
// every time the app calls from this router this function runs


router.use(function timeLog (req, res, next) {
  req.timeLog = Date.now()
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})

// define the about route
router.get('/about', function (req, res, next) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.timeLog + '</small>'
  res.send(responseText)
})

module.exports = router