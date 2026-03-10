const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: process.env.LIMIT
});

module.exports = limiter;