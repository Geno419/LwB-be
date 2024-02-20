require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const studentRouter = require("./Routes/student");
const broadcastRouter = require("./Routes/broadcast");
const viewerRouter = require("./Routes/viewer");
const subjectRouter = require("./Routes/subject");
const yearRouter = require("./Routes/year");
const quizRouter = require("./Routes/quiz");
const bodyParser = require("body-parser");

app.use(cors());
const uri = process.env.DB_URL;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();
app.use(express.json());

app.use("/students", studentRouter);

app.use("/consumer", viewerRouter);
app.use("/broadcast", broadcastRouter);
// app.use("/videos", videoRouter);

// subjects
app.use("/subjects", subjectRouter)
// Year
app.use("/years", yearRouter)
// Quiz
app.use("/quiz", quizRouter)

app.listen("8000", () => {
  console.log("server started on 8000");
});
