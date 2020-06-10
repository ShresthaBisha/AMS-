const Joi = require('joi')
const mongoose = require('mongoose')

let meetingSchema = new mongoose.Schema({
    classroomid: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    teacherid: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    scheduleinfo: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
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
        classroomid: Joi.string().min(1).max(50).required(),
        teacherid: Joi.string().min(1).max(255).required(),
        scheduleinfo: Joi.string().min(2).max(255).required(),
        link: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(meeting, schema)
}
exports.Meeting = Meeting
exports.validate = validateMeeting

//validation required