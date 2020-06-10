const Joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
Joi.objectId = require('joi-objectid')(Joi)
require('dotenv').config()

const app = express()

const users = require('./routes/users')
const auth = require('./routes/auth')
const books = require('./routes/books')
const classrooms = require('./routes/classrooms')
const meetings = require('./routes/meetings')
const studentclassrooms = require('./routes/student_classrooms')
if (!process.env.JWT_SECRET) {
    console.log('FATAL ERROR: JWT_SECRET is not defined')
    process.exist(1) // 0 means success anything else failure
}

mongoose.connect('mongodb://localhost/ams') // add db username password
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'))

app.use(cors())
app.use(express.json())
app.use('/api/users', users)    //add version
app.use('/api/auth', auth)
app.use('/api/books', books)
app.use('/api/classrooms',classrooms)
app.use('/api/meetings',meetings)
app.use('/api/studentclassrooms',studentclassrooms)
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`))