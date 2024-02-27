const express = require('express')
const router = express.Router()
const {update, deleteUser, getUser, getAllUsers} = require('../Controllers/teacher.controller')

  
  //update teacher
  router.put("/:id", update);
  
  //delete teacher
  router.delete("/:id", deleteUser);
  
  
  //get a teacher
  router.get("/:id", getUser);

  //get all teachers
  router.get("/", getAllUsers);

module.exports = router