
const express = require('express')
const router = express.Router()

const classroom_controller= require('../controllers/classroom')

router.post('/create', classroom_controller.classroom_create);
router.get('/:id',classroom_controller.classroom_details);
router.put('/:id/update',classroom_controller.classroom_update);
router.delete('/:id/delete',classroom_controller.classroom_delete);
router.get('/', classroom_controller.classroom_list);
module.exports = router