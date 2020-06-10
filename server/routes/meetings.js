const express = require('express')
const router = express.Router()

const meeting_controller = require('../controllers/meeting')

router.post('/create', meeting_controller.meeting_create)
router.get('/:id', meeting_controller.meeting_details)
router.put('/:id/update', meeting_controller.meeting_update)
router.delete('/:id/delete', meeting_controller.meeting_delete)
router.get('/', meeting_controller.meeting_list)
module.exports = router
