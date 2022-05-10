const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
  name: String,
  lasName: String,
}))

module.exports = Users