const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const teacher = require('../middleware/teacher')

const { Classroom, validate } = require('../models/classroom');

// std js with tab index of 4

// add async
exports.classroom_create = async (req,res)=>{
    const { error, value: classroomReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const {grade} = classroomReq
    let grad= await Classroom.findOne({ grade }) // change to ISBN later ex: ISBN uniq <- given ISBN
    if (grad) return res.status(400).send("Classroom already exists")
    classroom= new Classroom({...classroomReq});
    
    await classroom.save()
    res.send(classroom)
};

exports.classroom_list=(req,res)=>{
    Classroom.find((err,classroom)=>{
        if(err) return next(err);
        res.send(classroom)
    })
};

exports.classroom_details=async (req,res)=>{
    const classroom=await Classroom.findById(req.params.id)
    if(!classroom) return res.status(400).send("Classroom not found")
    res.send(classroom)
};

exports.classroom_update=async (req,res)=>{
    const classroomReq=req.body
    //if (error) res.status(400).send(error.details[0].message)

    await Classroom.findByIdAndUpdate(req.params.id,{...classroomReq})
    updated_classroom=await Classroom.findById(req.params.id)
    res.send(updated_classroom)
}

exports.classroom_delete=async (req,res)=>{
    deleted_classroom = await Classroom.findByIdAndRemove(req.params.id)
    res.send(deleted_classroom)
}