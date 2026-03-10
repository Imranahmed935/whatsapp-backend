const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const limiter = require("./middleware/rateLimiter");
const router = require("./module/message/message.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use("/api", router);

app.use(errorHandler)

module.exports = app;