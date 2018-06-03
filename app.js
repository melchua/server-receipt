var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
var logger = require('morgan');
var config = require('./knexfile.js');  
var env = 'development';  
var knex = require('knex')(config[env]);

var indexRouter = require('./routes/index');
var receiptsRouter = require('./routes/receipts');
var imagesRouter = require('./routes/images');

var app = express();
app.use(bodyParser.urlencoded({
  extended:true,
  limit: 40000
}))

app.use(bodyParser.json({
  limit: "10mb"
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/receipts', receiptsRouter);
app.use('/images', imagesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
