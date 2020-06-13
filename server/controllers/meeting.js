const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const teacher = require('../middleware/teacher')

const { Meeting, validate } = require('../models/meeting');

// std js with tab index of 4

// add async
exports.meeting_create = async (req,res)=>{
    const { error, value: meetingReq } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    //const {grade} = meetingReq
    //let grad= await Meeting.findOne({ grade }) // change to ISBN later ex: ISBN uniq <- given ISBN
    //if (grad) return res.status(400).send("Meeting already exists")
    meeting= new Meeting({...meetingReq});
    
    await meeting.save()
    res.send(meeting)
};

exports.meeting_list=(req,res)=>{
    Meeting.find((err,meeting)=>{
        if(err) return next(err);
        res.send(meeting)
    })
};

exports.meeting_details=async (req,res)=>{
    const meeting=await Meeting.findById(req.params.id)
    if(!meeting) return res.status(400).send("Meeting not found")
    res.send(meeting)
};

exports.meeting_update=async (req,res)=>{
    const meetingReq=req.body
    //if (error) res.status(400).send(error.details[0].message)

    await Meeting.findByIdAndUpdate(req.params.id,{...meetingReq})
    updated_meeting=await Meeting.findById(req.params.id)
    res.send(updated_meeting)
}

exports.meeting_delete=async (req,res)=>{
    deleted_meeting = await Meeting.findByIdAndRemove(req.params.id)
    res.send(deleted_meeting)
}