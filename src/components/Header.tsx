'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    router.push('/login');
  };

  const navigateToDashboard = () => {
    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          📋 Menu
        </div>
        <ul className="p-4 space-y-4">
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={navigateToDashboard}
          >
            Dashboard
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => router.push("/camera-information")}
        >
            Camera Information
        </li>

          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => router.push("/settings")}
        >
            Settings
          </li>
          <li
            className="hover:bg-red-600 p-2 rounded cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-900 text-white px-3 py-2 rounded shadow-md hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '⏴' : '☰'}
      </button>
    </>
  );
}
