const Student = require("../Models/student.model");

async function getStudent(req, res, next) {
  let student;

  try {
    student = await Student.findById(req.params.id);
    if (student === null) {
      return res.status(404).JSON({ message: "Can't find student" });
    }
  } catch {
    (err) => {
      console.error(err);
    };
  }
  res.student = student;
  next();
  return res.student;
}

module.exports = { getStudent };
