const express = require("express");
const router = express.Router();
const { consumerController} = require("../Controllers/server.controller");

router.post("/", consumerController)

module.exports = router;