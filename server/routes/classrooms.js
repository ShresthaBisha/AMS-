const express = require('express')
const router = express.Router()

const controller = require('../controllers/classroom')
const auth = require('../middleware/auth')
const teacher = require('../middleware/teacher')

router.post('/create', [auth, teacher], controller.createClassroom)
// router.get('/:id', classroom_controller.classroom_details)
// router.put('/:id/update', classroom_controller.classroom_update)
// router.delete('/:id/delete', classroom_controller.classroom_delete)
// router.get('/', classroom_controller.classroom_list)

module.exports = router
