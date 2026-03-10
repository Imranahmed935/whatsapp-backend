const PQueue = require("p-queue").default;

const concurrencyNumber = Number(process.env.QUEUE) || 1;
const queue = new PQueue({
  concurrency: concurrencyNumber,
});

module.exports = queue;
