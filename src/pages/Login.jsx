import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '' && password.trim() === '') {
      setMessage('Please enter username and password.');
    } else if (username.trim() === '' || password.trim() === '') {
      setMessage('Please enter username and password.');
    } else if (username === 'admin' && password === '1234') {
      setMessage('Login successful!');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setMessage('');
    setIsLoggedIn(false);
  };

  return (
    <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-indigo-600 px-6 py-5 text-white">
        <h1 className="text-xl font-bold">
          Login Authentication
        </h1>

        <p className="mt-1 text-sm text-indigo-100">
          Activity 1
        </p>
      </div>

      <div className="p-6">
        {isLoggedIn ? (
          <div>
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-medium text-emerald-600">
                ✓
              </div>
            </div>

            <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
              {message}
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-5 text-center">
              <p className="text-sm text-slate-500">
                Welcome back,
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                {username}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {message && (
              <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Login
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Sample credentials — Username:{' '}
              <strong className="font-semibold text-slate-500">
                admin
              </strong>
              , Password:{' '}
              <strong className="font-semibold text-slate-500">
                1234
              </strong>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}