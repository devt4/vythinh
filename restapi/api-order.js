var express = require('express');
const { saveOrder, getOrders, updateOrder } = require('../services/cartService');
var router = express.Router();


router.post('/', async function (req, res, next) {
  const ido = new Date().getTime().toString()
  let order = {...req.body, _id: ido}
  const rs = await saveOrder(order)
  res.send(JSON.stringify({id_order: rs.insertedId}))
});

router.get('/', async function (req, res, next) {
  const rs = await getOrders()
  res.send(JSON.stringify(rs))
});

router.put('/', async function (req, res, next) {
  const order = req.body
  const rs = await updateOrder(order)
  res.send(JSON.stringify(rs))
});



module.exports = router;