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
  body:{
    type: String,
    required: true
  },
  date:{
    type: Date,
  },
  comments: [{
    body:{
        type: String,
        required: true
    }
  }],
  votes: {
    type: Number,
  }
});

module.exports = mongoose.model("Notes", notesSchema);
