import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="flex h-screen  bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Panel */}
        <div className="flex-1 p-4">
          <div className="flex justify-end mb-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          <Routes>
            <Route path="/" element={<p className="text-xl">Start a new chat</p>} />
            <Route path="/chat/:sessionId" element={<ChatWindow />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
