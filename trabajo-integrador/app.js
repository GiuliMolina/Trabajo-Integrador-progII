var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const zapatosRouter = require('./routes/zapatos');

var app = express();
const session = require('express-session');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false
}));

app.use(function(req, res,next){
  res.locals.estaLogueado = {
    nombre: 'Justin',
    imagen: '../images/justinbieber.webp',
    email: 'justinb@gmail.com',
  }
  return next()
})

app.use(function(req,res,next){
  
  console.log(req.cookies.recordarme)
  
  if(req.session.user !== undefined){
    res.locals.estaLogueado = true
    res.locals.user = req.session.user
  }else{
    res.locals.estaLogueado = false
  };
  return next();
});



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/zapatos',zapatosRouter);

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
