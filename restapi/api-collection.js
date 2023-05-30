var express = require('express');
const { getCollectionsAll, getCollectionById, addCollection } = require('../services/collectionsService');
var router = express.Router();


router.get('/', async function (req, res, next) {
  const rs = await getCollectionsAll()
  res.send(JSON.stringify(rs))
});
router.post('/', async function (req, res, next) {
  const collection = req.body
  const rs = await addCollection(collection)
  res.send(JSON.stringify(rs))
});

router.get('/:id', async function (req, res, next) {
  const {id} = req.params
  const filter = {
    pageNumber: 1,
    sort: "BSL"
  }
  const rs = await getCollectionById(id, filter)
  res.send(JSON.stringify(rs))
});




module.exports = router;