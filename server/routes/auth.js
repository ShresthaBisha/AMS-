const express = require('express')
const auth_controller= require('../controllers/auth')
const router = express.Router()

router.post('/',auth_controller.auth_create)
module.exports = router