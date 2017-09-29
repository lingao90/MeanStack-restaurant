"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
// -------------blog-------------------//
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var index = require('./routes/index');
var config = require('./config/database');
var blogs = require('./routes/blogs');
var comments = require('./routes/comments');
var menuCategory = require('./routes/menuCategory');
var menuItems = require('./routes/menuItems');

//var login = require('./routes/login');


var users = require('./routes/users');
var app = express();

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});
// CORS Middleware
// app.use(cors());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes


// Index Route
// app.get('/', (req, res) => {
//   res.send('Server is down');
// });


// ------------blogend------------------//


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

app.use('/', index);
app.use('/users', users);
app.use('/blogs', blogs);
app.use('/comments', comments);
app.use('/', menuCategory);
app.use('/menuCategory',menuItems);
  app.use(fileUpload());
app.use('/upload',function(req,res,next){

    
    // if (!req.files)
    //   return res.status(400).send(false);
    // var file = req.files.file;
    // var typ = file.mimetype.split("/");
    // var fileName = req.body.short_name+"."+typ[1];
    // file.mv('public/images/menu/'+fileName, function(err) {
    //   if (err){
    //     res.json({fileName: false});
    //   } else {
    //     fileName='/images/menu/'+fileName;
    //     res.json({fileName: fileName});
    //   }
    
    // });
    if (!req.files)
      return res.status(400).send(false);
    var file = req.files.file;
    var typ = file.mimetype.split("/");
    var fileName = req.body.short_name+"."+typ[1];
    file.mv('public/images/menu/'+fileName, function(err) {
      if (err){
        res.json({fileName: false});
      } else {
        fileName=req.body.short_name;
        res.json({fileName: fileName});
      }
    
    });
}); 
app.use('/addMenuItem',function(req,res,next){

    console.log(req);
    
    if (!req.files)
      return res.status(400).send(false);
    var file = req.files.file;
    var typ = file.mimetype.split("/");
    var fileName = req.body.short_name+"."+"jpg";
    file.mv('public/images/menu-categorys/'+fileName, function(err) {
      if (err){
        res.json({fileName: false});
      } else {
        fileName='public/images/menu-categorys/'+fileName;
        res.json({fileName: fileName});
      }
    
    });
}); 
//app.use('/#/login',login);

// app.use('/users', users);

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


