// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const app = express()
const PORT = 3000
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
// 引用路由器
const routes = require('./routes')
//樣板引擎
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})