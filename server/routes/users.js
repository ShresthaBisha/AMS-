const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const userController = require('../controllers/user')

const router = express.Router()

router.post('/create', userController.userCreate)
router.post('/search', userController.userSearch)
// router.get('/:id', userController.user_details)
// router.put('/:id/update', userController.user_update)
// router.delete('/:id/delete', userController.user_delete)

module.exports = router
