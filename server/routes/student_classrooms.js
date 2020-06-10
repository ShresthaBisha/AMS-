
const express = require('express')
const router = express.Router()

const student_classroom_controller= require('../controllers/student_classroom')

router.post('/create', student_classroom_controller.student_classroom_create);
router.get('/:id',student_classroom_controller.student_classroom_details);
router.put('/:id/update',student_classroom_controller.student_classroom_update);
router.delete('/:id/delete',student_classroom_controller.student_classroom_delete);
router.get('/', student_classroom_controller.student_classroom_list);
module.exports = router