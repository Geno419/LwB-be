const express = require("express");
const router = express.Router();
const Quiz = require("../Models/quiz.model");
const {getQuizById} = require("../Utils/getQuizById")


// GET QUIZ BY QUIZ SUBJECT
// /quiz?subject
router.get('/', async (req, res)=>{
    
    try{
        let query = {};
    if (req.query.teacher) {
      query.teacher = req.query.teacher;
    }
    if (req.query.subject) {
      query.subject = req.query.subject;
    }
  
    if (req.query.schoolyear){
        query.schoolyear = req.query.schoolyear;
    }
    if (req.query.title){
        query.title= req.query.title;
    }
        const quizzes = await Quiz.find(query).sort({ date: "desc" })
        res.status(200).send({quizzes})   
            
        
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// GET ALL QUIZ
router.get('/', async (req, res)=>{
    try{
        const quizzes = await Quiz.find().sort({ date: "desc" });
        res.status(200).send({quizzes})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// POST
router.post("/", async (req, res)=>{
    const quiz = new Quiz({
        quizData: req.body.quizData,
        title: req.body.title,
        subject: req.body.subject,
        schoolyear: req.body.schoolyear,
        teacher: req.body.teacher
    });
    try{
        const newQuiz = await quiz.save();
        res.status(201).send({newQuiz})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// DELETE
router.delete("/:id", getQuizById,  async (req, res) =>{
    try{
    await res.quiz.deleteOne();
    res.json({ message: "Delete successful!" });
    send({ message: "Delete successful!" });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// GET BY ID
router.get("/:id", getQuizById,  (req, res)=>{
    res.status(200).send(res.quiz)
})

module.exports = router;