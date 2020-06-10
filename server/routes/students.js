const express = require('express')
const router = express.Router()

const controller = require('../controllers/student')
const auth = require('../middleware/auth')
const teacher = require('../middleware/teacher')

router.post('/create', [auth, teacher], controller.createStudent)
// router.get('/:id', student_classroom_controller.student_classroom_details)
// router.put('/:id/update', student_classroom_controller.student_classroom_update)
// router.delete('/:id/delete', student_classroom_controller.student_classroom_delete)
// router.get('/', student_classroom_controller.student_classroom_list)

module.exports = router
