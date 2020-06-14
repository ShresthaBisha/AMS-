const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const userController = require('../controllers/user')
const auth = require('../middleware/auth')
const teacher = require('../middleware/teacher')

const router = express.Router()

router.post('/create', [auth, teacher], userController.createUser)
router.post('/search', [auth, teacher], userController.searchUsers)
router.get('/read/:id', auth, userController.getUserById)
// router.put('/:id/update', userController.user_update)
// router.delete('/:id/delete', userController.user_delete)

module.exports = router