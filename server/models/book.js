const Joi = require('joi')
const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    subtitle: {
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
    author: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    }

})

function validateBook (book) {
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        subtitle: Joi.string().min(5).max(255).required(),
        description: Joi.string().min(2).max(255).required(),
        author: Joi.string().min(5).max(255).required(),
    }

    return Joi.validate(user, schema)
}
module.exports = mongoose.model('Book', bookSchema)


//validation required