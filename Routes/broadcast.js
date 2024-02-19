const express = require("express");
const router = express.Router();
const { broadcastController } = require('../Controllers/server.controller')

router.post("/", broadcastController)

module.exports = router;
