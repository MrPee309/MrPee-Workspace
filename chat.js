
import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: "ou" }]);
    setInput("");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Chat</h1>
        <div className="bg-gray-800 p-4 rounded h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
          ))}
        </div>
        <div className="mt-4 flex">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 rounded-l bg-gray-700" placeholder="Ekri yon mesaj..." />
          <button onClick={sendMessage} className="bg-blue-600 px-4 rounded-r">Voye</button>
        </div>
      </div>
    </div>
  );
}
