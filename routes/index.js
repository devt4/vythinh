var express = require('express');
var database = require("../data.json");
const { getCollections } = require('../services/collectionsService');
const { getAdminInfo } = require('../services/adminService');
var router = express.Router();


router.get('/', async function(req, res, next) {
  const adminInfo = await getAdminInfo();
  console.log(adminInfo);
  const indexData = adminInfo.indexPage;
  const collectionRender = await getCollections(indexData.tags)
  
  res.render('index', { pageName: "index", pageData: {
    bannerImages: adminInfo.bannerImages,
    collections: collectionRender,
    indexData: indexData
  }});
});

module.exports = router;
