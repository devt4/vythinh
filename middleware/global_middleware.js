var express = require('express');
const { getAdminInfo } = require('../services/adminService');
var router = express.Router();

router.get("/", async function (req, res, next) {
    const infoadmin = await getAdminInfo();
    res.locals.brandInfo = infoadmin;
    res.locals.rootDir = process.env.DOMAIN || "http://localhost:3000"
    next()
});

module.exports = router;
