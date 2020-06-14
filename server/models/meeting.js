const Joi = require('joi')
const mongoose = require('mongoose')

let meetingSchema = new mongoose.Schema({
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    },
    lecture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecture',
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    scheduleinfo: {
        type: Array,
        required: true
    },
    link: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    }

})
const Meeting = mongoose.model('Meeting', meetingSchema)
function validateMeeting (meeting) {
    const schema = {
        classroom: Joi.objectId().required(),
        lecture: Joi.objectId().required(),
        teacher: Joi.objectId().required(),
        scheduleinfo: Joi.array().required(),
        link: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(meeting, schema)
}
exports.Meeting = Meeting
exports.validate = validateMeeting

//validation required