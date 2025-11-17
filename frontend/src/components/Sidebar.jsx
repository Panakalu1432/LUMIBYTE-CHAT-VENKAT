import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  const fetchSessions = async () => {
    const res = await fetch("https://lumibyte-chat-venkat.onrender.com/api/sessions");
    const data = await res.json();
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const newChat = async () => {
    const res = await fetch("https://lumibyte-chat-venkat.onrender.com/api/new-chat");
    const data = await res.json();
    navigate(`/chat/${data.id}`);
    fetchSessions();
  };

  return (
    <div className="w-64 bg-gray-200 dark:bg-gray-800 p-4 overflow-y-auto">
      <button
        className="w-full bg-blue-500 text-white px-3 py-2 rounded mb-4"
        onClick={newChat}
      >
        + New Chat
      </button>

      <h2 className="text-lg mb-2 font-bold">Sessions</h2>
      <ul>
        {sessions.map((s) => (
          <li
            key={s.id}
            className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
            onClick={() => navigate(`/chat/${s.id}`)}
          >
            {s.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
