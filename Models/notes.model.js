const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  year: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
  votes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Notes", notesSchema);
