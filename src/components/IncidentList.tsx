// src/components/IncidentList.tsx

"use client";

import { useEffect, useState } from "react";

type Incident = {
  id: string;
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  camera: {
    name: string;
    location: string;
  };
};

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch unresolved incidents on mount
  useEffect(() => {
    const fetchIncidents = async () => {
      const res = await fetch("/api/incidents?resolved=false");
      const data = await res.json();
      setIncidents(data);
      setLoading(false);
    };

    fetchIncidents();
  }, []);

  // Handle resolve button
  const resolveIncident = async (id: string) => {
    // Optimistically remove from list
    setIncidents((prev) => prev.filter((i) => i.id !== id));
    try {
      await fetch(`/api/incidents/${id}/resolve`, {
        method: "PATCH",
      });
    } catch (error) {
      console.error("Failed to resolve incident", error);
    }
  };

  if (loading) return <div className="w-1/3 p-6 text-white">Loading incidents...</div>;

  return (
    <div className="w-1/3 p-6 overflow-y-auto bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Unresolved Incidents</h2>

      {incidents.length === 0 ? (
        <p className="text-gray-500">All incidents resolved 🎉</p>
      ) : (
        incidents.map((incident) => (
          <div
            key={incident.id}
            className="mb-4 p-4 bg-white rounded shadow-sm border border-gray-200"
          >
            <img
              src={incident.thumbnailUrl}
              alt="Incident"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-sm font-semibold text-red-600">{incident.type}</p>
            <p className="text-sm text-gray-700">Camera: {incident.camera.location}</p>
            <p className="text-sm text-gray-600">
              {new Date(incident.tsStart).toLocaleTimeString()} -{" "}
              {new Date(incident.tsEnd).toLocaleTimeString()}
            </p>
            <button
              onClick={() => resolveIncident(incident.id)}
              className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Resolve
            </button>
          </div>
        ))
      )}
    </div>
  );
}
