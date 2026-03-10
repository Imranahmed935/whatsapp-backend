const express = require("express");
const router = express.Router();
const messageController = require("./message.controller");
const { validateMessageMiddleware } = require("./message.validation");


router.post("/send-message",validateMessageMiddleware, messageController.sendMessageController);

module.exports = router;