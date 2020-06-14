const express = require('express')

const { Lecture, validate } = require('../models/lecture')
const { getArr } = require('../utils')

exports.createLecture = async (req, res) => {
    const { error, value: lectureReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)

    const { subject, classroom } = lectureReq

    let lecture = await Lecture.findOne({ subject, classroom }).populate(['classroom','teacher'])

    if (lecture)
        return res.status(400).send(` ${classroom}-${subject} already exists`)
//:TODO Change classroom ID to grade-section
//:TODO Check if the teacherid is a TEACHER user
    lecture = new Lecture(lectureReq)
    await lecture.save()

    res.send(lecture)
}

exports.getAllLectures = async (req, res) => {
    const lectures = await Lecture.find().populate(['classroom','teacher'])
    res.send(lectures)
}

exports.getLectureById = async (req, res) => {
    const lecture = await Lecture.findById(req.params.id).populate('classroom')
    if (!lecture) return res.status(400).send('Lecture with given ID not found')

    res.send(lecture)
}

// exports.classroom_update = async (req, res) => {
//     const classroomReq = req.body
//     //if (error) res.status(400).send(error.details[0].message)
//
//     await Classroom.findByIdAndUpdate(req.params.id, { ...classroomReq })
//     updated_classroom = await Classroom.findById(req.params.id)
//     res.send(updated_classroom)
// }
//
// exports.classroom_delete = async (req, res) => {
//     deleted_classroom = await Classroom.findByIdAndRemove(req.params.id)
//     res.send(deleted_classroom)
// }
