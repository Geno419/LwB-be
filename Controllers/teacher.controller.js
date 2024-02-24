const createError = require("../error.js")
const Teacher = require ("../Models/teacher.model.js")

const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    console.log(req.user)

try {
    const updatedUser = await Teacher.findByIdAndUpdate(
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
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json("Teacher has been deleted.");
  } catch (err) {
    next(err);
  }
} else {
  return next(createError(403, "You can delete only your account!"));
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

module.exports = { getUser, deleteUser, update, getAllUsers}