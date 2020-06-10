const express = require('express')

const router = express.Router()
const { User } = require('../models/book')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const book_controller= require('../controllers/book')

router.post('/create', book_controller.book_create);
router.get('/:id',book_controller.book_details);
router.put('/:id/update',book_controller.book_update);
router.delete('/:id/delete',book_controller.book_delete);
router.get('/', book_controller.book_list);

// router.get('/lend', [middlware], ...)

module.exports = router