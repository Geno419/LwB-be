const express = require('express')
const {signup, signin} = require ('../Controllers/auth.controller')


const router = express.Router()

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

module.exports = router