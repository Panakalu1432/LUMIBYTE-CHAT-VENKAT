LumiByte Chat Application – Full Stack README

A full-stack Chat Application built using React (Frontend) and Node.js + Express + SQLite (Backend).
The system allows users to create chat sessions, send/receive messages, and manage their conversations.

### Features
## Frontend (React)

    Create new chat sessions

    Display all chat sessions

    Chat UI with user + bot messages

    Auto-scroll chat window

    Clean & responsive UI

    API integration with backend

    Shows loading status, errors, empty states

## Backend (Node.js + Express)

    REST API

    Create & delete chat sessions

    Store messages & sessions in SQLite (chat.db)

    NanoID for unique session IDs

    Separate tables for sessions and messages

    CORS enabled

    Simple & scalable folder structure

### /LumiByte-chat-app
|
├── /backend
|   ├── node_modules/
|   ├── server.js 
|   ├── mockData.js             
|   ├── package.json
|
└── /frontend
    ├── node_modules/
    ├── package.json
    ├── tailwind.config.js
    └── /src
        ├── /components
        |   ├── Sidebar.jsx
        |   ├── ThemeToggle.jsx
        |   ├── ChatWindow.jsx
        |   ├── NewChat.jsx
        |   ├── ChatInput.jsx 
        |   ├── TableResponse.jsx 
        |   └── AnswerFeedback.jsx
        ├── App.jsx             
        ├── main.jsx           
        └── index.css           
### Tech Stack

 # Frontend

    React.js

    Axios

    React Hooks

    CSS modules / Tailwind / Styled Components (depending on your setup)

# Backend

    Node.js

    Express.js

    SQLite3

    NanoID

    Body-Parser

    CORS


### Backend Setup

# Install dependencies
    cd backend
    npm install

# Start server
    node server.js

# Server runs on:
    http://localhost:3001


## Create new chat session

# POST /api/session

Response: { "sessionId": "A1b2C3d" }

Get chat session by ID

# GET /api/session/:id

{
  "session": { "id": "...", "title": "...", "created_at": "..." },
  "messages": [
    { "id": 1, "role": "user", "content": "Hello" }
  ]
}

# Send Message

POST /api/message

Body:

{
  "sessionId": "A1b2C3d",
  "role": "user",
  "content": "Hi"
}

# Delete session

DELETE /api/session/:id

 About chat.db

chat.db is a SQLite database containing:

Table: sessions
id  | title | created_at

Table: messages
id | session_id | role | content | created_at


All messages and chat sessions are permanently stored.

## Frontend Setup (React)
    cd frontend
    Install dependencies
    npm install
    npm start


Runs on:

http://localhost:5173  (Vite)
or
http://localhost:3000 (CRA)

Frontend → Backend Connection

Inside your React project, you will have something like:

const API_BASE = "http://localhost:3000/api";


Requests:

await fetch(`${API_BASE}/session`);
await fetch(`${API_BASE}/session/${id}`);
await fetch(`${API_BASE}/message`);
await fetch(`${API_BASE}/session/${id}`);

How the App Works

User clicks New Chat → Backend generates sessionId

Session list updates

Open a session → loads all old messages

User sends message → stored in DB

Bot reply (optional future integration)

