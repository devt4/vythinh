const { cache } = require('ejs');
var express = require('express');
var database = require("../data.json")
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log(database);
  res.render('index', { pageName: "index", pageData: database });
});

module.exports = router;
