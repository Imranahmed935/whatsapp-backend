function validateMessage(phone, message) {

  if (!phone) {
    return "Phone is required";
  }

  if (!message) {
    return "Message is required";
  }

  return "valid";
}


test("should fail when phone is missing", () => {

  const result = validateMessage("", "hello");

  expect(result).toBe("Phone is required");

});


test("should fail when message is missing", () => {

  const result = validateMessage("+8801871421977", "");

  expect(result).toBe("Message is required");

});


test("should pass when phone and message exist", () => {

  const result = validateMessage("+8801871421977", "hello");

  expect(result).toBe("valid");

});