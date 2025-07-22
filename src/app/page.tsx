// src/app/page.tsx
import IncidentPlayer from "../components/IncidentPlayer";
import IncidentList from "../components/IncidentList";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-200">
      <IncidentPlayer />
      <IncidentList />
    </main>
  );
}
