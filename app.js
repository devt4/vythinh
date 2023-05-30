var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes');
var collectionRouter = require('./routes/collections');
var productionRouter = require("./routes/productions");
var searchRouter = require("./routes/search")
var checkoutRouter = require("./routes/checkout")
var orderRouter = require("./routes/order")
var apiOrder =  require("./restapi/api-order")
var apiCollections = require("./restapi/api-collection")
var globalMiddleware = require("./middleware/global_middleware")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors({
  origin: '*'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use middleware 
app.use("/*", globalMiddleware)


app.use('/', indexRouter);
app.use('/collections', collectionRouter);
app.use("/production", productionRouter);
app.use("/search", searchRouter);
app.use("/checkouts", checkoutRouter);
app.use("/order", orderRouter)
app.use("/api/order", apiOrder )
app.use("/api/collections", apiCollections )

app.use("/about", (req, res)=> {
  res.render('index', { pageName: "about", pageData: {} });
})

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



app.listen(3001, ()=>{
  console.log("Server started");
})
