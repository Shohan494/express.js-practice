var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // rndering the data to pug template
  res.render('index', { title: 'Express' });
});

module.exports = router;
