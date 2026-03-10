const PQueue = require("p-queue").default;

const queue = new PQueue({
  concurrency: 3
});

module.exports = queue;