require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const studentRouter = require("./Routes/student");
const router = require("./Routes/student");

app.use(cors());
const uri = process.env.DB_URL;

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

app.listen("8000", () => {
  console.log("server started on 8000");
});
