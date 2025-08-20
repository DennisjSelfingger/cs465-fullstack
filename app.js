// // 
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var hbs = require('hbs');

// // ✅ Add passport setup
// var passport = require('passport');
// require('./app_api/config/passport');

// // ✅ Connect to database
// require('./app_api/models/db');

// // Routers
// var indexRouter = require('./app_server/routes/index');
// var usersRouter = require('./app_server/routes/users');
// var travelRouter = require('./app_server/routes/travel');
// var apiRouter = require('./app_api/routes/index');

// var app = express();

// // View engine setup
// app.set('views', path.join(__dirname, 'app_server', 'views'));
// app.set('view engine', 'hbs');
// hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// // Middleware
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // ✅ Initialize passport
// app.use(passport.initialize());

// // ✅ Updated CORS headers to include Authorization
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

// // Routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/travel', travelRouter);
// app.use('/api', apiRouter);

// // Catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // Catch unauthorized error and create 401
// app.use((err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).json({ message: err.name + ": " + err.message });
//   } else {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
//   }
// });

// module.exports = app;
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const passport = require('passport');

require('dotenv').config(); // Load env variables
require('./app_api/models/db'); // DB connection
require('./app_api/config/passport'); // Passport config

// Routers
const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_api/routes/index'); // 

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(passport.initialize());

// CORS headers for API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter); // ✅ NOW THIS WILL REGISTER /api/login and /api/register

// 404 error
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handling
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: err.name + ": " + err.message });
  } else {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = app;
