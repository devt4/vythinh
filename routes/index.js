var express = require('express');
var database = require("../data.json");
const { getCollections } = require('../services/collectionsService');
var router = express.Router();


router.get('/', function(req, res, next) {
  const collections = getCollections(["New"])
  res.render('index', { pageName: "index", pageData: {
    bannerImages: database.bannerImages,
    collections: collections
  } });
});

module.exports = router;
