var express = require('express');
const { saveOrder } = require('../services/cartService');
var router = express.Router();


router.post('/', async function (req, res, next) {
  const ido = new Date().getTime().toString()
  let order = {...req.body, _id: ido}
  const rs = await saveOrder(order)
  console.log(rs);
  res.send(JSON.stringify({id_order: rs.insertedId}))
});




module.exports = router;