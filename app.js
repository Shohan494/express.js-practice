var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// included routing paths
var index = require('./routes/index');
var users = require('./routes/users');

//using express.Router
var birds = require('./routes/birds')

//var mw = require('./middleware/my-middleware.js')
//app.use(mw({ option1: '1', option2: '2' }))


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// this worked because of putting in front of other functions
app.use(function (req, res, next) {
  console.log('It is working.. Time:', Date.now())
  next()
})

any routes declared in the same path name
app.use('/birds', function (req, res, next) {
  res.send('USER')
  next()
})

// initial routing paths
app.use('/', index);
app.use('/users', users);

app.use('/birds', birds);
//app.use('/mw', mw);

/* this middleware does not run if there is
any routes declared in the same path name
app.use('/birds', function (req, res, next) {
  res.send('USER')
  next()
})
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
