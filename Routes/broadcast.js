const express = require("express");
const router = express.Router();
const { broadcastController } = require('../Controllers/streaming.controller')

router.post("/", broadcastController)

module.exports = router;
