
import { useState } from "react";
export default function Upload() {
  const [file, setFile] = useState(null);
  const handleUpload = () => {
    if (!file) return;
    alert(`Fichye ${file.name} telechaje!`);
  };
  return (
    <div style={{ padding: "20px", backgroundColor: "#0d1b2a", color: "white", height: "100vh" }}>
      <h1 style={{ fontSize: "2rem" }}>Upload Fichye</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ margin: "20px 0" }}/>
      <button onClick={handleUpload} style={{ padding: "10px 20px", background: "#1e90ff", color: "white", border: "none", borderRadius: "5px" }}>Upload</button>
    </div>
  );
}
