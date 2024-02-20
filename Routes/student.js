const express = require('express')
const router = express.Router()
const {update, deleteUser, getUser, getAllUsers} = require('../Controllers/student.controller')


const verifyToken = require ("../verifyToken")
  
  //update student
  router.put("/:id", verifyToken, update);
  
  //delete student
  router.delete("/:id", verifyToken, deleteUser);
  
  
  //get a student
  router.get("/:id", getUser);

  //get all students
  router.get("/", getAllUsers);


module.exports = router
