require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const studentRouter = require("./Routes/student");
const broadcastRouter = require("./Routes/broadcast");
const viewerRouter = require("./Routes/viewer");
const path = require("path");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const bodyParser = require('body-parser');


app.use(cors());
const uri = process.env.DB_URL;

app.use(express.static('public'));
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

// Set up GridFS storage engine
const storage = new GridFsStorage({
  url: uri,
  file: (req, file) => {
    return {
      filename: file.originalname
    };
  }
});
const upload = multer({ storage });

// Route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded successfully:", req.file);
  const fl= req.file;
  res.send({file: fl, success: true, message: 'File uploaded successfully' });
});

app.use("/students", studentRouter);

app.use("/consumer", viewerRouter);
app.use('/broadcast', broadcastRouter);

app.listen("8000", () => {
  console.log("server started on 8000");
});
