const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  url: {
    type: String,
    required: true,
  },
  comments:[{
    type:String
  }]
});

module.exports = mongoose.model("Video", videoSchema);
