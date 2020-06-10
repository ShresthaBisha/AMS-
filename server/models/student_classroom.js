const Joi = require('joi')
const mongoose = require('mongoose')

let student_classroomSchema = new mongoose.Schema({
    classroomid: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    studentarray: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 255
    }
})

function validateStudentClassroom (student_classroom) {
    const schema = {
        classroomid: Joi.string().min(2).max(50).required(),
        studentarray: Joi.array().min(2).max(150).required()
    }
    return Joi.validate(student_classroom, schema)
}
Studentclassroom = mongoose.model('Studentclassroom', student_classroomSchema)
exports.Studentclassroom = Studentclassroom
exports.validate = validateStudentClassroom

//validation required