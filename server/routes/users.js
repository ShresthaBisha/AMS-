const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const userController = require('../controllers/user')

const router = express.Router()

router.post('/create', userController.createUser)
router.post('/search', userController.searchUsers)
router.get('/read/:id', userController.getUserById)
// router.put('/:id/update', userController.user_update)
// router.delete('/:id/delete', userController.user_delete)

module.exports = router
