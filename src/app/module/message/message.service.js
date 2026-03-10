
const whatsappService = require("../../services/whatsapp.service");
const queue = require("../../utils/message.queue");

const sendMessageService = async (phone, message) => {
  const result = await queue.add(() => whatsappService.sendMessage(phone, message));
  return {
    messageId: result.id?.id || null
  };
};

module.exports = {
  sendMessageService
};