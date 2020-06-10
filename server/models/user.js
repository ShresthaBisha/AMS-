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
        maxlength: 255,
        select: false
    },
    fullName: {
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
        enums: [{ type: String, enum: ['STUDENT', 'TEACHER'] }],
        type: Array,
    }
})

userSchema.methods.generateToken = function () {
    return jwt.sign(omit(this.toJSON(), ['password', '__v', 'fullName']), process.env.JWT_SECRET)
}

const User = mongoose.model('User', userSchema)

function validateUser (user) {
    const schema = {
        username: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(5).max(255).required(),
        fullName: Joi.string().min(5).max(255).required(),
        groups: Joi.array().items(Joi.string().valid('STUDENT', 'TEACHER')).required()
    }

    return Joi.validate(user, schema)
}

function validateAuthUser (user) {
    const schema = {
        username: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema)
}

function validateSearchUser (user) {
    const schema = {
        status: Joi.array().items(Joi.string().valid('INITIAL', 'ACTIVE', 'SUSPEND')),
        groups: Joi.array().items(Joi.string().valid('STUDENT', 'TEACHER')),
    }

    return Joi.validate(user, schema)
}

exports.User = User
exports.validate = validateUser
exports.validateAuthUser = validateAuthUser
exports.validateSearchUser = validateSearchUser
