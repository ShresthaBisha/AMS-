const express = require('express')

const { Student, validate, validateSearch } = require('../models/student')

exports.createStudent = async (req, res) => {
    const { error, value: studentReq } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { user, classroom } = studentReq

    let student = await Student.findOne({ user })
    if (student) return res.status(400).send('This user is already used')

    //:TODO validate user and classroom

    student = new Student(studentReq)
    await student.save()

    res.send(student)
}

exports.search = async (req, res) => {
    const { error, value: searchReq } = validateSearch(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const students = await Student.find(searchReq).populate('user classroom')

    res.send(students)
}

exports.getStudentById = async (req, res) => {
    const student = await Student.findById(req.params.id).populate('user classroom')
    if (!student) return res.status(400).send('Student with given ID not found')

    res.send(student)
}

// exports.student_classroom_update=async (req,res)=>{
//     const student_classroomReq=req.body
//     //if (error) res.status(400).send(error.details[0].message)
//     const { classroomid, studentarray } = student_classroomReq
//     if (classroomid) await Studentclassroom.findByIdAndUpdate(req.params.id,{$set:classroomid})
//     if (studentarray) await Studentclassroom.findByIdAndUpdate(req.params.id,{$push: studentarray})
//     updated_student_classroom=await Studentclassroom.findById(req.params.id)
//     //res.send(updated_student_classroom)
//     res.send(studentarray)
// }
//
// exports.student_classroom_delete=async (req,res)=>{
//     deleted_student_classroom = await Studentclassroom.findByIdAndRemove(req.params.id)
//     res.send(deleted_student_classroom)
// }
