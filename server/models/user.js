const Joi = require('joi')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const omit = require('lodash/omit')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    status: {
        enum: ['INITIAL', 'ACTIVE', 'SUSPEND'],
        type: String,
        default: 'ACTIVE'
    },
    groups: {
        enums: [{ type: String, enum: ['STUDENT', 'TEACHER','LIBRARIAN','ADMIN'] }],
        type: Array,
    }
})

// Information Expert Principle
userSchema.methods.generateToken = function () {
    return jwt.sign(omit(this.toJSON(), ['password', '__v']), process.env.JWT_SECRET)
}

const User = mongoose.model('User', userSchema)

function validateUser (user) {
    const schema = {
        username: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(5).max(255).required(),
        groups: Joi.array().items(Joi.string().valid('ADMIN','LIBRARIAN','STUDENT', 'TEACHER'))
    }

    return Joi.validate(user, schema)
}

exports.User = User
exports.validate = validateUser