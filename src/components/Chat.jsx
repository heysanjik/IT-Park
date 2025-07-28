import React, { useState } from "react";
import { SendHorizontal, X, MessageSquareMore } from "lucide-react";
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Savollaringiz bo‘lsa, yozib qoldiring — biz yordam beramiz.",
    },
  ]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { from: "user", text: message }]);
    setMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <div
        className="chat-button"
        onClick={handleToggle}
        title="Operator bilan bog‘lanish"
      >
        <MessageSquareMore size={28} strokeWidth={2.25} />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            IT Center
            <span className="close-btn" onClick={handleToggle}>
              <X className="x" />
            </span>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={msg.from === "user" ? "user-msg" : "bot-msg"}
              >
                {msg.text}
              </p>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Xabar yozing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button type="submit" onClick={handleSend}>
              <SendHorizontal />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
