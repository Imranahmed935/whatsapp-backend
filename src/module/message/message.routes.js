const express = require("express");
const router = express.Router();
const messageController = require("../message/message.controller");

router.post("/send-message", messageController.sendMessage);

module.exports = router;