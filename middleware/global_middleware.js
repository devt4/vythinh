var express = require('express');
var router = express.Router();

brandInfo = {
    phone: '0974837284',
    email: 'lamsssapexvn@gmail.com',
    address: [
      "Store 1: 633 Nguyễn Đình Chiểu, P.2, Q.3. HCM",
      "Store 2: 63ad3 Nguyễnada Đình Chiểu, P.2, Q.3. HCM"
    ],
    moreInfo: [
      "Bảo hành 2 năm",
      "Free ship toàn quốc"
    ],
    socialMedia: [
      {
        name: 'facebook',
        linkTo: 'https://fb.com'
      },
      {
        name: 'instagram',
        linkTo: 'https://instagram.com'
      }
    ]
  }

router.get("/", function (req, res, next) {
    res.locals.brandInfo = brandInfo;
    res.locals.rootDir = process.env.DOMAIN || "http://localhost:3000"
    next()
});

module.exports = router;
