const Joi = require('joi')
const mongoose = require('mongoose')

const classroomSchema = new mongoose.Schema({
    grade: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2
    },
    description: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Classroom = mongoose.model('Classroom', classroomSchema)

function validateClassroom (classroom) {
    const schema = {
        grade: Joi.number().required(),
        section: Joi.string().min(1).max(2).required(),
        description: Joi.string(),
        teacher: Joi.string().required(),
    }
    return Joi.validate(classroom, schema)
}

exports.Classroom = Classroom
exports.validate = validateClassroom
