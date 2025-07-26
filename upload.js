
import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Upload() {
  const [file, setFile] = useState(null);
  const handleUpload = () => {
    if (!file) return;
    alert(`Fichye ${file.name} telechaje!`);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Upload Fichye</h1>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
        <button onClick={handleUpload} className="bg-blue-600 px-4 py-2 rounded">Upload</button>
      </div>
    </div>
  );
}
