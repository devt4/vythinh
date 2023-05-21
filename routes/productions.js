var express = require('express');
var router = express.Router();
var database = require("../data.json");
const { getDetailById, getColorById } = require('../services/productsService');

const rltProducts = database.collection[0].products

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  product = getDetailById(id)
  res.render('index', { pageName: "production", pageData: {
    product: product,
    relativeProductions: rltProducts
  } });
});

router.get('/colors/:id', function(req, res, next) {
  const id = req.params.id
  const colors = getColorById(id)
  res.json({colors: colors})
});

module.exports = router;