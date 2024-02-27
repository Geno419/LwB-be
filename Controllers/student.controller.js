const createError = require("../error.js")
const Student = require ("../Models/student.model.js")

const update = async (req, res, next) => {
 
try {
    const updatedUser = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}


const deleteUser = async (req, res, next) => {

  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json("Student has been deleted.");
  } catch (err) {
    next(err);
  }
}

const getUser = async (req, res, next) => {
try {
  const user = await Student.findById(req.params.id);
  res.status(200).json(user);
} catch (err) {
  next(err);
}
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Student.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
  };

module.exports = { getUser, deleteUser, update, getAllUsers}