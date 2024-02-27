const express = require("express");
const router = express.Router();
const Subject = require("../Models/subject.model");

// GET ALL SUBJECTS
router.get('/', async (req, res)=>{
    try{
        const subjects = await Subject.find();
        res.status(200).send({subjects})
        
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// POST
router.post("/", async (req, res)=>{
    const subject = new Subject({
        subject: req.body.subject
    });
    try{
        const newSubject = await subject.save();
        res.status(201).send({ newSubject });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


module.exports = router;