const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
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
  views: {
    type: Number,
    default: 0,
  },
  comments:[{
    type:String
  }]
});

module.exports = mongoose.model("Video", videoSchema);
