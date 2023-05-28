var express = require('express');
var router = express.Router();
const { getCollectionById } = require('../services/collectionsService');
const { defaultFilter } = require("../const/const")

router.get('/:id', function (req, res, next) {
  const id = req.params.id
  let filter = defaultFilter
  if (req.query.sort) {
    filter = req.query
  }
  getCollectionById(id, filter).then((collection)=>{
    res.render('index', { pageName: "collections", pageData: {collection: collection, filter: filter} });
  })
});

module.exports = router;
