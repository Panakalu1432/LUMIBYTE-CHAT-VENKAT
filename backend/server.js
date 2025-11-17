const express = require("express");
const cors = require("cors");
const db = require("./db.js");
const {nanoid} = require("nanoid");
const { sessions, sessionHistory, generateMockChatResponse } = require("./mockData");


const app = express();

app.use(cors());
app.use(express.json());

const now = () => new Date().toISOString();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port", PORT));




app.get("/api/sessions", (req, res) => {
  try {
    const rows = db.prepare("SELECT id, title, created_at FROM sessions ORDER BY created_at DESC").all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve sessions" });
  }
});


app.get("/api/new-chat", (req, res) => {
  const newSessionId = "sess_" + nanoid(10);
  const title = `Chat ${newSessionId.slice(-4)}`;

  try {
    db.prepare(
      "INSERT INTO sessions (id, title, created_at) VALUES (?, ?, ?)"
    ).run(newSessionId, title, now());

    res.json({ id: newSessionId, title });
  } catch (err) {
    res.status(500).json({ error: "Failed to create session" });
  }
});

app.get("/api/session/:id", (req, res) => {
  const { id } = req.params;

  try {
    const rows = db.prepare(
      "SELECT sender, message, timestamp FROM messages WHERE session_id = ? ORDER BY timestamp ASC"
    ).all(id);

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

app.post("/api/chat/:id", (req, res) => {
  const sessionId = req.params.id;
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const botResponse = generateMockChatResponse(question);

  try {
    db.prepare(
      "INSERT INTO messages (session_id, sender, message, timestamp) VALUES (?, ?, ?, ?)"
    ).run(sessionId, "user", question, now());

    res.json(botResponse);
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});



app.listen(PORT, () => console.log("Server running on port", PORT));