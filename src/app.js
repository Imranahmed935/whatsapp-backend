const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const limiter = require("./app/middleware/rateLimiter");
const router = require("./app/module/message/message.routes");
const errorHandler = require("./app/middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("WhatsApp Backend API Running");
});

app.use(errorHandler)

module.exports = app;