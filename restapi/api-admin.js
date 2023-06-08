var express = require('express');
const { getAdminInfo, updateAdmin, getPages, getPagesByID, updatePage } = require('../services/adminService');
var router = express.Router();

router.get('/', async function (req, res, next) {
    const rs = await getAdminInfo()
    res.send(JSON.stringify(rs))
});

router.put('/', async function (req, res, next) {
    const admin = req.body
    const rs = await updateAdmin(admin)
    res.send(JSON.stringify(rs))
});

router.get('/pages', async function (req, res, next) {
    const rs = await getPages()
    res.send(JSON.stringify(rs))
});

router.put('/pages', async function (req, res, next) {
    const rs = await updatePage(req.body)
    res.send(JSON.stringify(rs))
});
router.get('/pages/:id', async function (req, res, next) {
    const {id } = req.params
    const rs = await getPagesByID(id)
    res.send(JSON.stringify(rs))
});

module.exports = router;
