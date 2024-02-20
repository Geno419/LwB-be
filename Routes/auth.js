const express = require('express')
const {signupStudent, signinStudent, signupTeacher, signinTeacher} = require ('../Controllers/auth.controller')


const router = express.Router()

//Create a student
router.post("/student/signup", signupStudent)

//Sign in as student
router.post("/student/signin", signinStudent)

//Create a teacher
router.post("/teacher/signup", signupTeacher)

//Sign in as teacher
router.post("/teacher/signin", signinTeacher)

module.exports = router