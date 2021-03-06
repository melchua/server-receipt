var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
var logger = require('morgan');
var config = require('./knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);
var cors = require('cors')



var indexRouter = require('./routes/index');
var receiptsRouter = require('./routes/receipts');
var imagesRouter = require('./routes/images');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var projectRouter = require('./routes/projects');
var categoryRouter = require('./routes/categories');

var app = express();
app.use(cors({
  origin: 'https://www.paperless.stream',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: true,
  limit: 40000
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.use(bodyParser.json({
  limit: "10mb"
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/receipts', receiptsRouter);
app.use('/images', imagesRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/projects', projectRouter);
app.use('/categories', categoryRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;