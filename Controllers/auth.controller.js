const mongoose = require("mongoose");
const Student = require ("../Models/student.model")
const Teacher = require("../Models/teacher.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require ('cookie-parser')
const createError = require ("../error")


const signupStudent = async (req, res, next) => {
    try {
      const userExists = await Student.findOne({ userName: req.body.userName });
      if (userExists) {
        return next(createError(400, "Username already exists!"));
    }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.userPassword, salt);
      const newStudent = new Student({ ...req.body, userPassword: hash })
       
      await newStudent.save();
      res.status(200).send("Student has been created!");
    } catch (err) {
      next(err);
    }
  };


const signinStudent = async (req, res, next) => {
    try {
      const user = await Student.findOne({ userName: req.body.userName });
      if (!user) return next(createError(404, "Student not found!"));
  
      const isCorrect = await bcrypt.compare(req.body.userPassword, user.userPassword);
  
      if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
  
      const token = jwt.sign({ id: user._id }, process.env.JWT);

      // hides password
      const { userPassword, ...others } = user._doc;
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(others);
    } catch (err) {
      next(err);
    }
  };


  const signupTeacher = async (req, res, next) => {
    
    try {
      const userExists = await Teacher.findOne({ userName: req.body.userName });
      if (userExists) {
        return next(createError(400, "Username already exists!"));
    }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.userPassword, salt);
      const newStudent = new Teacher({ ...req.body, userPassword: hash })
       
      await newStudent.save();
      res.status(200).send("Teacher has been created!");
    } catch (err) {
      next(err);
    }
  };


const signinTeacher = async (req, res, next) => {
    try {
      const user = await Teacher.findOne({ userName: req.body.userName });
      if (!user) return next(createError(404, "Teacher not found!"));
  
      const isCorrect = await bcrypt.compare(req.body.userPassword, user.userPassword);
  
      if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
  
      const token = jwt.sign({ id: user._id }, process.env.JWT);

      // hides password
      const { userPassword, ...others } = user._doc;
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(others);
    } catch (err) {
      next(err);
    }
  };



module.exports = { signupStudent, signinStudent, signupTeacher, signinTeacher }