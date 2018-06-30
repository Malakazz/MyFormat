var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var formatRouter = require('./routes/format');
var thanksRouter = require('./routes/thanks');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/format', formatRouter);
app.use('/thanks', thanksRouter);

module.exports = app;
