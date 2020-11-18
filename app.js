const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const deviceRouter = require('./routes/deviceRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(deviceRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//allowing the cross communication 
app.use((req, res, next) => { res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader( 'Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept' ); 
 res.setHeader( 'Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS' );
  next(); });
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false}));

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
