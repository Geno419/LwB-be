const mongoose = require("mongoose");

const quizDataSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    incorrect1:{
        type: String,
        required: true
    },
    incorrect2: {
        type: String,
        required: true
    },
    incorrect3: {
        type: String,
        required: true
    }
})

const quizSchema = new mongoose.Schema({
    quizData: [quizDataSchema],
    title:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    schoolyear:{
        type: String,
        required: true
    },
    teacher:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Quiz", quizSchema);