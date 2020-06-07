const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const router = express.Router()
const { User, validate } = require('../models/user')
const user_controller= require('../controllers/user')
router.post('/', user_controller.user_create)

module.exports = router