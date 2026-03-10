
# WhatsApp Backend API

A Node.js backend service to send WhatsApp messages. Includes QR authentication, message sending API, and queue management for concurrent requests.

---

## Features

* QR authentication for WhatsApp Web
* Send messages via REST API
* Message queue handling using `p-queue`
* Configurable environment variables
* Easy integration with frontend or other services
* Optional logging for debugging

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **WhatsApp Integration:** whatsapp-web.js
* **Queue Handling:** P-Queue

---

## Prerequisites

* Node.js ≥ 18.x
* npm ≥ 9.x
* A WhatsApp account

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Imranahmed935/whatsapp-backend.git
cd whatsapp-backend/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
NODE_ENV=development
LIMIT=50
QUEUE=3
CLIENTID=whatsapp-session
```

* **PORT:** Server port (default: 5000)
* **NODE_ENV:** Environment mode (`development` or `production`)
* **LIMIT:** Maximum number of messages per batch
* **QUEUE:** Maximum concurrent requests in the queue
* **CLIENTID:** Session ID for WhatsApp authentication

### 4. Run the server

```bash
npm run dev
```

* The server will start at `http://localhost:5000`
* On first run, a QR code will appear in the terminal for WhatsApp authentication. Scan it using your phone.

### 5. API Endpoints

#### Send Message

```
POST /api/messages/send
```

**Request Body:**

```json
{
  "phone": "+880123456789",
  "message": "Hello from API"
}
```

**Response:**

```json
{
    "success": true,
    "message": "Message sent successfully",
    "data": {
        "messageId": "3EB0A5E2D45CFF518723D1"
    }
}
```

---

### 6. Testing

You can run tests using Jest:

```bash
npm test
```

* Includes validation tests and message API tests
* Increase test timeout for long-running WhatsApp operations if needed

---

3. Ensure `.env` is properly set in your production environment.

---

### 8. Project Structure

```
backend/
├─ src/
│  ├─ app/                 # Application modules
│  │  ├─ config/           # Configurations (socket.io)
│  │  ├─ middleware/       # Middleware (error handler, rate limiter)
│  │  ├─ module/message/   # Message module (controller, service, routes, validation)
│  │  ├─ services/         # External services (WhatsApp service)
│  │  └─ utils/            # Utilities (logger, message queue)
│  ├─ app.js               # Main Express app
│  └─ server.js            # Server entry point
├─ tests/                  # Unit and integration tests
├─ .env                    # Environment variables
├─ package.json            # Project dependencies and scripts
└─ README.md               # Project documentation
```
---

### 9. Environment Documentation

| Variable | Description                               | Default          |
| -------- | ----------------------------------------- | ---------------- |
| PORT     | Port on which the server runs             | 5000             |
| NODE_ENV | Environment mode (development/production) | development      |
| LIMIT    | Maximum messages per batch                | 50               |
| QUEUE    | Maximum concurrent requests               | 3                |
| CLIENTID | WhatsApp session identifier               | whatsapp-session |



