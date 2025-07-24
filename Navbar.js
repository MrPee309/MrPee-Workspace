
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-400">MrPee Workspace</h1>
      <div className="space-x-4">
        <Link href="/">Akèy</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/login">Dekonekte</Link>
      </div>
    </nav>
  );
}
