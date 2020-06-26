const express = require('express')
const bcrypt = require('bcrypt')
const omit = require('lodash/omit')

const { User, validate, validateSearchUser } = require('../models/user')

exports.createUser = async (req, res) => {
    const { error, value: userReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)

    const { username, password } = userReq

    let user = await User.findOne({ username })
    if (user) return res.status(400).send('User already registered')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    user = new User({ ...userReq, password: hashedPassword })

    await user.save()

    res.send(omit(user.toJSON(), ['__v', 'password']))
}

exports.searchUsers = async (req, res) => {
    const { error, value: searchReq } = validateSearchUser(req.body)
    if (error) res.status(400).send(error.details[0].message)
    //const {username,status,groups} = searchReq
    const {username,status,groups} = searchReq
    if(username){
        users=await User.find({username:{ $regex: username, $options: 'i' }})
    }
    else{
        users = await User.find(searchReq)
    }
    res.send(users)
}

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(400).send('User with given ID not found')

    res.send(user)
}

// exports.user_update = async (req, res) => {
//     const { error, value: userReq } = req.body
//     if (error) res.status(400).send(error.details[0].message)
//
//     await User.findByIdAndUpdate(req.params.id, { $set: userReq }, (err, user) => {
//         if (err) return next(err)
//         res.send(user)
//     })
// }

// exports.user_delete = (req, res) => {
//     User.findByIdAndRemove(req.params.id, (err, user) => {
//         if (err) return next(err)
//         res.send(user.toJSON())
//     })
// }

