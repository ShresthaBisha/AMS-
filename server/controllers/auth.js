const express = require('express')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const { User, validateAuthUser } = require('../models/user')

exports.auth = async (req, res) => {
    const { error, value: authReq } = validateAuthUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { username, password } = authReq

    let user = await User.findOne({ username }).select('+password')
    if (!user) return res.status(400).send('Invalid username or password')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('Invalid username or password')

    res.send({ ...omit(user.toJSON(), ['password', '__v']), token: user.generateToken() })
}
