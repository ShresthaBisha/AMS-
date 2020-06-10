const express = require('express')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')
const { User } = require('../models/user')

function validate (user) {
    const schema = {
        username: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema)
}

exports.auth_create= async (req, res) => {
    const { error, value: authReq } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { username, password } = authReq

    let user = await User.findOne({ username })
    if (!user) return res.status(400).send('Invalid username or password')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('Invalid username or password')

    res.send({ ...omit(user.toJSON(), ['password', '__v']), token: user.generateToken() })
}