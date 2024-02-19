const express = require("express");
const router = express.Router();
const Student = require("../Models/student.model");
const { getStudent } = require("../Utils/getStudent");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send({ students });
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
    res.status(201).send({ newStudent });
  } catch {
    (err) => {
      console.error(err);
      console.log(err);
      throw err;
    };
  }
});

router.patch("/:id", getStudent, async (req, res) => {
  if (req.body.firstName != null) {
    res.student.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.student.lastName = req.body.lastName;
  }
  if (req.body.userName != null) {
    res.student.userName = req.body.userName;
  }
  if (req.body.userPassword != null) {
    res.student.userPassword = req.body.userPassword;
  }
  if (req.body.userAvatarImg != null) {
    res.student.userAvatarImg = req.body.userAvatarImg;
  }

  try {
    const updatedStudent = await res.student.save();
    console.log(res.student);
    res.JSON(updatedStudent);
    send({ updatedStudent });
  } catch {
    (err) => {
      console.error(err);
    };
  }
});

router.delete("/:id", getStudent, async (req, res) => {
  try {
    await res.student.deleteOne();
    res.JSON({ message: "Delete successful!" });
    send({ message: "Delete successful!" });
  } catch {
    (err) => {
      console.error(err);
    };
  }
});

module.exports = router;
