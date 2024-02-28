const Teacher = require("../Models/teacher.model.js");
const bcrypt = require("bcrypt");

const update = async (req, res, next) => {
  try {
    const { userPassword, ...otherInfo } = req.body;

    const updatedUser = await Teacher.findByIdAndUpdate(
      req.params.id,
      {
        $set: otherInfo,
      },
      { new: true }
    );

    if (userPassword) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.userPassword, salt);

      updatedUser.userPassword = hash;
      await updatedUser.save();
    }
    
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json("Teacher has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await Teacher.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Teacher.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUser, deleteUser, update, getAllUsers };
