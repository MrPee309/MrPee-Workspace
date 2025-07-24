
import { useState } from "react";
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: "ou" }]);
    setInput("");
  };
  return (
    <div style={{ padding: "20px", backgroundColor: "#0d1b2a", color: "white", height: "100vh" }}>
      <h1 style={{ fontSize: "2rem" }}>Chat MrPee</h1>
      <div style={{ background: "#1e293b", padding: "10px", borderRadius: "5px", height: "70vh", overflowY: "auto", margin: "20px 0" }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ekri yon mesaj..." style={{ padding: "10px", width: "80%", borderRadius: "5px", marginRight: "5px" }}/>
        <button onClick={sendMessage} style={{ padding: "10px 20px", background: "#1e90ff", color: "white", border: "none", borderRadius: "5px" }}>Voye</button>
      </div>
    </div>
  );
}
