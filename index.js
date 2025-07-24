
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Byenveni nan MrPee Workspace</h1>
        <p className="mb-6">Tout pwojè ou nan yon sèl kote.</p>
        <ProjectSection />
      </main>
    </div>
  );
}
