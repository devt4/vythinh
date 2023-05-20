var express = require('express');
var router = express.Router();
var database = require("../data.json")

const collection = database.collection[0]

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.render('index', { pageName: "collections", pageData: collection });
});

module.exports = router;
