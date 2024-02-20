const mongoose = require("mongoose");
const Student = require ("../Models/student.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require ('cookie-parser')
const createError = require ("../error")


const signup = async (req, res, next) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.userPassword, salt);
      const newStudent = new Student({ ...req.body, userPassword: hash })
       
      await newStudent.save();
      res.status(200).send("User has been created!");
    } catch (err) {
      next(err);
    }
  };


const signin = async (req, res, next) => {
    try {
      const user = await Student.findOne({ userName: req.body.userName });
      if (!user) return next(createError(404, "User not found!"));
  
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

module.exports = { signup, signin }