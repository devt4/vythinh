var express = require('express');
const { getCollectionsAll, getCollectionById, addCollection, updateCollection, deleteCollection } = require('../services/collectionsService');
const { getProducts, getDetailById, saveProduction, updateProduction, deleteProduction } = require('../services/productsService');
var router = express.Router();


router.get('/', async function (req, res, next) {
  const {ids_col} = req.body
  const rs = await getProducts(ids_col)
  res.send(JSON.stringify(rs))
});
router.post('/', async function (req, res, next) {
  const product = req.body
  const rs = await saveProduction(product.idcol,product)
  res.send(JSON.stringify(rs))
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params
  const rs = await getDetailById(id)
  res.send(JSON.stringify(rs))
});

router.put('/', async function (req, res, next) {
  const product = req.body
  const rs = await updateProduction( product.idcol ,product)
  res.send(JSON.stringify(rs))
});

router.delete('/', async function (req, res, next) {
  const product = req.body
  const rs = await deleteProduction(product.idcol,product.id)
  res.send(JSON.stringify(rs))
});




module.exports = router;