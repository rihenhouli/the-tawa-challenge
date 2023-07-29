var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./database/mongodb.json");
const http = require("http");
const mongoose = require("mongoose");
const io = require("socket.io");
const cors = require("cors");
const axios = require('axios');

// routers
var userRouter = require('./modules/User/user.router');
var userPasswordRouter = require('./modules/UserPassword/user-password.router');
var userImageRouter = require('./modules/UserImage/user-image.router');
var mailAddressRouter = require('./modules/MailAddress/mail-address.router');
var phoneNumberRouter = require('./modules/PhoneNumber/phone-number.router');

var articleRouter = require('./modules/Article/article.router');
var articleSectionRouter = require('./modules/ArticleSection/article-section.router');
var articleImageRouter = require('./modules/ArticleImage/article-image.router');
var articleInterestRouter = require('./modules/ArticleInterest/article-interest.router');
var articleLikeRouter = require('./modules/ArticleLike/article-like.router');


var app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
// enabling cors 
app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes 
app.use('/user', userRouter);
app.use('/user-password', userPasswordRouter);
app.use('/user-image', userImageRouter);
app.use('/mail-address', mailAddressRouter);
app.use('/phone-number', phoneNumberRouter);

app.use('/article', articleRouter);
app.use('/article-section', articleSectionRouter);
app.use('/article-image', articleImageRouter);
app.use('/article-interest', articleInterestRouter);
app.use('/article-like', articleLikeRouter);


// database connection
mongoose.set("strictQuery", true);
mongoose
  .connect(db.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected To database!");
  })
  .catch((err) => {
    console.log(err.message);
  });


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

server.listen(3030, () => {
  console.log("app is running on port 3030");
});

module.exports = app;
