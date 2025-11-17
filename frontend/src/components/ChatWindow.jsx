import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";
import TableResponse from "./TableResponse";
import AnswerFeedback from "./AnswerFeedback";

function ChatWindow() {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState([]);

  const fetchSessionHistory = async () => {
    const res = await fetch(`https://lumibyte-chat-venkat.onrender.com/api/session/${sessionId}`);
    const data = await res.json();
    setMessages(data.messages || data);
  };

  useEffect(() => {
    fetchSessionHistory();
  }, [sessionId]);

  const sendMessage = async (question) => {
    const res = await fetch(`https://lumibyte-chat-venkat.onrender.com/api/chat/${sessionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    // append mock response
    setMessages((prev) => [
      ...prev,
      { sender: "user", message: question },
      { sender: "bot", message: data.text, table: data.table },
    ]);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Chat Session: {sessionId}</h1>
      <div className="space-y-4 mb-4" >
        
        {messages.map((m, index) => (
          <div
            key={index}
            className={`p-3 rounded ${
              m.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            <p>{m.message}</p>

            {/* Table Response */}
            {m.table && <TableResponse data={m.table} />}

            {/* Feedback */}
            {m.sender === "bot" && <AnswerFeedback />}
          </div>
        ))}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
