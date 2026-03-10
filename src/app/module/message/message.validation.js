const { z } = require("zod");

const messageSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number"),
  message: z.string().min(1, "Message is required")
});


function validateMessage(phone, message) {
  const result = messageSchema.safeParse({ phone, message });
  if (!result.success) {
    return result.error.errors[0]?.message || "Invalid input";
  }
  return "valid";
}

function validateMessageMiddleware(req, res, next) {
  const result = messageSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.errors[0]?.message || "Invalid input"
    });
  }
  next();
}

module.exports = {
  validateMessage,
  validateMessageMiddleware
};