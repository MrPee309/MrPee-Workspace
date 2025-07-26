
import Navbar from "../components/Navbar";
export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <button className="mt-5 px-6 py-3 bg-blue-600 rounded">Login ak Google</button>
      </div>
    </div>
  );
}
