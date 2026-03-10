const { sendMessageService } = require("./message.service");

const sendMessageController = async (req, res, next) => {
  try {
    const { phone, message } = req.body;
    const data = await sendMessageService(phone, message);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  sendMessageController,
};
