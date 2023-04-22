const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const users = require('./routes/users')

app.use(bodyParser.json())
app.use(cors())

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('port', process.env.PORT || 3000)

app.use('/api/users', users)

const options = {
  root: path.join(__dirname, '../public')
}

const fileName = 'indexH.html'

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(fileName, options)
})

module.exports = app
