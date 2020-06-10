const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const teacher = require('../middleware/teacher')

const { Studentclassroom, validate } = require('../models/student_classroom');

// std js with tab index of 4

// add async
exports.student_classroom_create = async (req,res)=>{
    const { error, value: student_classroomReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    //const {grade} = meetingReq
    //let grad= await Meeting.findOne({ grade }) // change to ISBN later ex: ISBN uniq <- given ISBN
    //if (grad) return res.status(400).send("Meeting already exists")
    student_classroom= new Studentclassroom({...student_classroomReq});
    
    await student_classroom.save()
    res.send(student_classroom)
};

exports.student_classroom_list=(req,res)=>{
    Studentclassroom.find((err,student_classroom)=>{
        if(err) return next(err);
        res.send(student_classroom)
    })
};

exports.student_classroom_details=async (req,res)=>{
    const student_classroom=await Studentclassroom.findById(req.params.id)
    if(!student_classroom) return res.status(400).send("Meeting not found")
    res.send(student_classroom)
};

exports.student_classroom_update=async (req,res)=>{
    const student_classroomReq=req.body 
    //if (error) res.status(400).send(error.details[0].message)
    const { classroomid, studentarray } = student_classroomReq
    if (classroomid) await Studentclassroom.findByIdAndUpdate(req.params.id,{$set:classroomid})
    if (studentarray) await Studentclassroom.findByIdAndUpdate(req.params.id,{$push: studentarray})
    updated_student_classroom=await Studentclassroom.findById(req.params.id)
    //res.send(updated_student_classroom)
    res.send(studentarray)
}

exports.student_classroom_delete=async (req,res)=>{
    deleted_student_classroom = await Studentclassroom.findByIdAndRemove(req.params.id)
    res.send(deleted_student_classroom)
}