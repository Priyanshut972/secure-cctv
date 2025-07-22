'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <main className="min-h-screen bg-blue-500 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-black shadow-xl rounded-xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Settings
        </h1>
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5" />
            </label>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Notifications
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5" />
            </label>
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full mt-6 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => alert('✅ Settings saved (Frontend Only)')}
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
