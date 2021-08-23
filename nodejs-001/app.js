var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const homeRouter = require('./routes/home');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// localhost:3000/ 요청이 오면
// ./routes 폴더에 있는 index.js 파일을 실행하여 요청을 처리하라

// Spring에서 클래스에 설정된 @RequestMapping에 해당하는 부분
app.use('/', indexRouter);

// localhost:3000/users 요청이 오면
// ./routes 폴더에 있는 users.js 파일을 실행하여 요청을 처리하라
app.use('/users', usersRouter);

app.use('/home', homeRouter);

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
