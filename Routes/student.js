const express = require("express");
const router = express.Router();
const Student = require("../Models/student.model");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    console.log(students);
  } catch {
    (err) => {
      console.error(err);
      console.log(err);
      throw err;
    };
  }
});

router.post("/", async (req, res) => {
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    userPassword: req.body.userPassword,
    userAvatarImg: req.body.userAvatarImg,
  });
  try {
    const newStudent = await student.save();
    res.status(201).JSON(newStudent);
  } catch {
    (err) => {
      console.error(err);
      console.log(err);
      throw err;
    };
  }
});

module.exports = router;
