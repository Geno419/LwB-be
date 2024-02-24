const createError = require("../error.js")
const Student = require ("../Models/student.model.js")

const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    console.log(req.user)

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
} else {
  return next(createError(403, "You can update only your account!"));
}
};

const deleteUser = async (req, res, next) => {
if (req.params.id === req.user.id) {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json("Student has been deleted.");
  } catch (err) {
    next(err);
  }
} else {
  return next(createError(403, "You can delete only your account!"));
}
};

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