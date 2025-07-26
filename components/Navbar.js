
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-400">MrPee Workspace</h1>
      <div className="space-x-4">
        <Link href="/">Akèy</Link>
        <Link href="/login">Login</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/upload">Upload</Link>
      </div>
    </nav>
  );
}
