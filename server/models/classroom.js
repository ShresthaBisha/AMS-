const Joi = require('joi')
const mongoose = require('mongoose')

let classroomSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    section: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    classteacherid: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    }

})
const Classroom = mongoose.model('Classroom', classroomSchema)
function validateClassroom (classroom) {
    const schema = {
        grade: Joi.string().min(1).max(50).required(),
        section: Joi.string().min(1).max(255).required(),
        description: Joi.string().min(2).max(255).required(),
        classteacherid: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(classroom, schema)
}
exports.Classroom = Classroom
exports.validate = validateClassroom

//validation required