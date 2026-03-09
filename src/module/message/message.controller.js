
const whatsappService = require("../../services/whatsapp.service");

exports.sendMessage = async (req, res, next) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Phone and message required"
      });
    }

    const result = await whatsappService.sendMessage(phone, message);

    res.json({
      success: true,
      data: result.id.id
    });

  } catch (err) {
    next(err);
  }
};