import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 flex-1 bg-white dark:bg-gray-700"
        placeholder="Ask something..."
      />

      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
