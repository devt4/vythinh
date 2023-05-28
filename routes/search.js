var express = require('express');
var router = express.Router();
const { defaultFilter } = require("../const/const");
const { getProductsByName } = require('../services/productsService');

router.get('/', function (req, res, next) {
  const keywords = req.query.keywords
  let filter = defaultFilter
  if (req.query.sort) {
    filter = req.query
  }
  getProductsByName(keywords).then((products)=>{
    res.render('index', { pageName: "search", pageData: {products: products, filter: filter, keywords: keywords} });
  })
});

module.exports = router;