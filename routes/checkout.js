var express = require('express');
var router = express.Router();
const { defaultFilter } = require("../const/const");
const { getProductsByName } = require('../services/productsService');

router.get('/', function (req, res, next) {
  res.render('index', { pageName: "checkout", pageData: {}});
});

module.exports = router;