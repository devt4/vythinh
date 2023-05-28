var express = require('express');
var router = express.Router();
const { defaultFilter } = require("../const/const");
const { getProductsByName, getColorById } = require('../services/productsService');
const { getOrderById } = require('../services/cartService');

router.get('/', function (req, res, next) {
  res.render('index', { pageName: "order", pageData: {}});
});
router.get('/success', async function (req, res, next) {
  const id_order = req.query.id
  const order = await getOrderById(id_order)
  console.log("successs "+ order);
  res.render('index', { pageName: "order-success", pageData: {order: order}});
});

module.exports = router;