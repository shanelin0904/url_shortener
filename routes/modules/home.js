// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const randomUrlGenerator = require('../../utilities/randomUrlGenerator')
const UrlData = require('../../models/urldata')
// 產生初始頁面


router.get('/', (req, res) => {
  res.render('index')
})


router.get('/:urlcode', (req, res) => {
  const { urlcode } = req.params
  UrlData.find({ urlcode })
    .then(urldata => res.redirect(urldata[0].url))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const { url } = req.body
  UrlData.findOne({ url })
    .then(urldata => {
      if (!urldata) {
        urlcode = randomUrlGenerator()
        //為了能夠存進資料庫要符合格式，所以將兩個物件融合(隨機產生的短網址亂碼+傳入的原始網址)
        let urlObject = {
          urlcode: urlcode
        }
        
        let object = Object.assign(urlObject, req.body)

        UrlData.create(object)
          .then(() => res.render('result', { urlcode }))
          .catch(err => console.log(err))
      }
      res.render('result', { urlcode: urldata.urlcode })
    })
})

// 匯出路由模組
module.exports = router