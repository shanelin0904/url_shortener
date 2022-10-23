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
  
  
  urlcode = randomUrlGenerator()
  let urlObject = {

    urlcode: urlcode

  }
  let object = Object.assign(urlObject, req.body)

  UrlData.create(object)
    .then(() => res.render('result', { urlcode }))
    .catch(err => console.log(err))
})





// 匯出路由模組
module.exports = router