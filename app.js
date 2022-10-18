// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const app = express()
const PORT = 3000
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
//樣板引擎
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 這是設定啥
app.use(bodyParser.urlencoded({ extended: true }))
// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})