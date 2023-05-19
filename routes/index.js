var express = require('express');
var router = express.Router();

data = {
  brandInfo: {
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
  },
  
}

const indexPageData  = {
  bannerImages: [
    "/rs/ms_banner_img1.jpg?v=139",
    "/rs/ms_banner_img3.jpg?v=139",
    "/rs/ms_banner_img4.jpg?v=139"
  ],
  collection: [
    {
      _id: "backpacks",
      collectionName: "Backpacks",
      products: [
        {
          id: "1",
          name: "PREMIUM DAILY BACKPACK",
          price: "560.000",
          images: [
            "/rs/demo-balo.jpg",
            "/rs/demo-balo1.jpg"
          ]
        },
        {
          id: "2",
          name: "PREMIUM DAILY BACKPACK2",
          price: "560.000",
          images: [
            "/rs/demo-balo.jpg",
            "/rs/demo-balo1.jpg"
          ]
        },
        {
          id: "3",
          name: "PREMIUM DAILY BACKPAC3",
          price: "560.000",
          images: [
            "/rs/demo-balo.jpg",
            "/rs/demo-balo1.jpg"
          ]
        }
      ]
    }
  ]
}

router.get('/', function(req, res, next) {
  res.render('index', { data: data, indexPageData: indexPageData });
});

module.exports = router;
