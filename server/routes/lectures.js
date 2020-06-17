const express = require('express')
const router = express.Router()

const controller = require('../controllers/lecture')
const auth = require('../middleware/auth')
const teacher = require('../middleware/teacher')

router.post('/create', [auth, teacher], controller.createLecture)
router.get('/read', auth, controller.getAllLectures)
router.get('/read/:id', auth, controller.getLectureById)
// router.put('/:id/update', controller.lecture_update)
// router.delete('/:id/delete', controller.lecture_delete)

module.exports = router
