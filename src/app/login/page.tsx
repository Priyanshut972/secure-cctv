'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const dummyEmail = 'tandonpriyanshu972@gmail.com';
    const dummyPassword = 'Priyanshu';

    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem('auth', 'true');
      router.push('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h1>

        {/* Username Label */}
        <label className="block mb-1 text-sm font-medium text-white">
          Username:
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 p-2 w-full mb-4 rounded bg-white text-black placeholder-gray-400"
          required
        />

        {/* Password Label */}
        <label className="block mb-1 text-sm font-medium text-white">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 p-2 w-full mb-4 rounded bg-white text-black placeholder-gray-400"
          required
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
