const socketIo = require("socket.io");
const whatsappService = require("../services/whatsapp.service");

let io;

const initSocket = (server) => {
  io = socketIo(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Client connected");
  });

  whatsappService.on("qr", (qr) => {
    io.emit("qr", qr);
  });
};

module.exports = { initSocket };