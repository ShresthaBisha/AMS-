const Joi = require('joi')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    }
})

function validateStudent (student) {
    const schema = {
        user: Joi.objectId().required(),
        classroom: Joi.objectId().required()
    }

    return Joi.validate(student, schema)
}

function validateSearch (student) {
    const schema = {
        user: Joi.objectId(),
        classroom: Joi.objectId()
    }

    return Joi.validate(student, schema)
}

Student = mongoose.model('Student', studentSchema)

exports.Student = Student
exports.validate = validateStudent
exports.validateSearch = validateSearch
