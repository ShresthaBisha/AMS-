const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const router = express.Router()
const { User, validate } = require('../models/user')
const user_controller= require('../controllers/user')

router.post('/create', user_controller.user_create);
router.get('/:id',user_controller.user_details);
router.put('/:id/update',user_controller.user_update);
router.delete('/:id/delete',user_controller.user_delete);
router.get('/', user_controller.user_list);

module.exports = router