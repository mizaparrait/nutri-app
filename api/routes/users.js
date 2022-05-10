const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

router.get('/', (req, res) => {
  Users.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
  Users.create(req.body).then(x => res.status(201).send(x))
})

module.exports = router