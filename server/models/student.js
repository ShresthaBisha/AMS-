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

function validateStudent (student_classroom) {
    const schema = {
        user: Joi.objectId().required(),
        classroom: Joi.objectId().required()
    }

    return Joi.validate(student_classroom, schema)
}

Student = mongoose.model('Student', studentSchema)

exports.Student = Student
exports.validate = validateStudent
