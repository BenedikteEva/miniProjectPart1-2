var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var loggerDoc=require('./logger')
var cors = require('cors')
var graphQlRouter = require('./routes/graph');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var friendfinderwebRouter = require('./routes/friendfinderweb');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('env', 'development');
app.use(cors())
app.use(logger('dev'));
//app.use(loggerDoc);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/friendfinderweb', friendfinderwebRouter);
app.use('/graphql', graphQlRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

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
