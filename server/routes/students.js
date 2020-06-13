const express = require('express')
const router = express.Router()

const controller = require('../controllers/student')
const auth = require('../middleware/auth')
const teacher = require('../middleware/teacher')

router.post('/create', [auth, teacher], controller.createStudent)
router.post('/search', [auth, teacher], controller.search)
router.get('/read/:id', auth, controller.getStudentById)
// router.put('/:id/update', student_classroom_controller.student_classroom_update)
// router.delete('/:id/delete', student_classroom_controller.student_classroom_delete)

module.exports = router
