var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 首页访问配置
 */
var index = require('./routes/index');
app.use('/', index);

/**
 * API
 */
var exportToWord = require('./routes/resume/api/exportToWord');
app.use('/resume/export/word', exportToWord);

var addResume = require('./routes/resume/api/addResume');
app.use('/resume/add', addResume);

var getResumeList = require('./routes/resume/api/getResumeList');
app.use('/resume/list', getResumeList);

var getResumeById = require('./routes/resume/api/getResumeById');
app.use('/resume/detail', getResumeById);

var updateResumeById = require('./routes/resume/api/updateResumeById');
app.use('/resume/update', updateResumeById);

var deleteResume = require('./routes/resume/api/deleteResume');
app.use('/resume/delete', deleteResume);

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
  // res.render('error');
});

module.exports = app;
