// src/components/IncidentPlayer.tsx

export default function IncidentPlayer() {
  return (
    <div className="w-2/3 p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Incident Player</h2>

      {/* Video or Image placeholder */}
      <div className="w-full h-96 bg-black flex items-center justify-center rounded-lg overflow-hidden">
        {/* You can replace with a <video> if needed */}
        <img
          src="/thumbnails/thumb1.jpg"
          alt="Incident video frame"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Mini strip of other camera thumbnails */}
      <div className="flex gap-4 mt-4">
        <img
          src="/thumbnails/thumb2.jpg"
          alt="Camera 2"
          className="w-24 h-16 object-cover rounded"
        />
        <img
          src="/thumbnails/thumb3.jpg"
          alt="Camera 3"
          className="w-24 h-16 object-cover rounded"
        />
      </div>
    </div>
  );
}
