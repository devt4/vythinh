var express = require('express');
var database = require("../data.json");
const { getCollections } = require('../services/collectionsService');
var router = express.Router();


router.get('/', function(req, res, next) {
  getCollections(["New"]).then((data)=>{
    res.render('index', { pageName: "index", pageData: {
      bannerImages: database.bannerImages,
      collections: data
    }});
  })
  
});

module.exports = router;
