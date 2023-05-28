var express = require('express');
var router = express.Router();
const { getDetailById, getColorById } = require('../services/productsService');
const { sortProductions } = require('../libs/collection-until');
const { BSL } = require('../const/const');
const { findCollectionByProductId } = require('../services/collectionsService');


router.get('/:id', async function(req, res, next) {
  const id = req.params.id
  const product = await getDetailById(id)
  const rltCollect = await findCollectionByProductId(id)

  res.render('index', { pageName: "production", pageData: {
    product: product,
    relativeProductions: sortProductions(rltCollect.products, BSL).filter((e, i)=>e.id != product.id).slice(0, 5)
  } });
  
});

router.get('/colors/:id', function(req, res, next) {
  const id = req.params.id
  getColorById(id).then((colors)=>{
    res.json({colors: colors})
  })
  
});

module.exports = router;