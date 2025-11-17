const path = require("path");
const os = require("os");
const Database = require("better-sqlite3");

// Use the OS temporary directory (cross-platform) so the DB path exists
const tmpDir = os.tmpdir();
const dbPath = path.join(tmpDir, "chat.db");

const db = new Database(dbPath);

// Create tables if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    title TEXT,
    created_at TEXT
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    sender TEXT,
    message TEXT,
    timestamp TEXT,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
  );
`);

module.exports = db;
