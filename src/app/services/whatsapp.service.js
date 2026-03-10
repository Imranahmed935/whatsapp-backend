const { Client, LocalAuth } = require("whatsapp-web.js");
const EventEmitter = require("events");

class WhatsAppService extends EventEmitter {
  constructor() {
    super();
    
    this.client = new Client({
      authStrategy: new LocalAuth({ clientId: process.env.CLIENTID }),
      puppeteer: { headless: false },
    });

    this.initialize();
  }

  initialize() {
    this.client.on("qr", (qr) => this.emit("qr", qr));

    this.client.on("ready", () => {
      console.log("WhatsApp Ready");
      this.emit("ready");
    });

    this.client.on("disconnected", () => {
      console.log("WhatsApp Disconnected. Reconnecting...");
      this.client.initialize();
    });

    this.client.initialize();
  }

  async waitUntilReady() {
    if (this.client.info && this.client.info.wid) return;
    await new Promise((resolve) => this.client.once("ready", resolve));
  }

  async sendMessage(phone, message) {
    await this.waitUntilReady();
    const cleanPhone = phone.replace(/\D/g, '');
    const chatId = `${cleanPhone}@c.us`;
    return await this.client.sendMessage(chatId, message);
  }
}

module.exports = new WhatsAppService();