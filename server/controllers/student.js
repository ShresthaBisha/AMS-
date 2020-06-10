const express = require('express')

const { Student, validate } = require('../models/student')

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

// exports.student_classroom_list=(req,res)=>{
//     Studentclassroom.find((err,student_classroom)=>{
//         if(err) return next(err);
//         res.send(student_classroom)
//     })
// };
//
// exports.student_classroom_details=async (req,res)=>{
//     const student_classroom=await Studentclassroom.findById(req.params.id)
//     if(!student_classroom) return res.status(400).send("Meeting not found")
//     res.send(student_classroom)
// };
//
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
