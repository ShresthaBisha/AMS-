const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')

const lectureSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom",
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

const Lecture = mongoose.model('Lecture', lectureSchema)

function validateLecture (lecture) {
    const schema = {
        subject: Joi.string().required(),
        classroom: Joi.objectId().required(),
        teacher: Joi.objectId().required(),
    }

    return Joi.validate(lecture, schema)
}

exports.Lecture = Lecture
exports.validate = validateLecture