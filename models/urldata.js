const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  urlcode: {
    type: String, // 資料型別是字串
    required: true
  }
})

module.exports = mongoose.model('UrlData', urlSchema)