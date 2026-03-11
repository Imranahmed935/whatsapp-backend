const request = require("supertest");
const app = require("../src/app");


jest.mock("../src/app/services/whatsapp.service.js", () => ({
  sendMessage: jest.fn().mockResolvedValue({ id: "mock-message-id" }),
  waitUntilReady: jest.fn().mockResolvedValue(true),
  client: {
    destroy: jest.fn()
  }
}));


describe("POST /api/send-message", () => {

  it("should return error if phone missing", async () => {
    const res = await request(app)
      .post("/api/send-message")
      .send({ message: "hello" });
    expect(res.statusCode).toBe(400);
  });


  it("should return error if message missing", async () => {
    const res = await request(app)
      .post("/api/send-message")
      .send({ phone: "+8801871421977" });
    expect(res.statusCode).toBe(400);
  });

  
  it("should accept valid request", async () => {
    const res = await request(app)
      .post("/api/send-message")
      .send({ phone: "+8801871421977", message: "Hello" });
    expect(res.statusCode).toBe(200);
  });

});


