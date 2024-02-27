const express = require('express')
const router = express.Router()
const {update, deleteUser, getUser, getAllUsers} = require('../Controllers/student.controller')

  
  //update student
  router.put("/:id", update);
  
  //delete student
  router.delete("/:id",deleteUser);
  
  
  //get a student
  router.get("/:id", getUser);

  //get all students
  router.get("/", getAllUsers);


module.exports = router
