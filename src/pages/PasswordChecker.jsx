import React, { useState } from 'react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [strengthLevel, setStrengthLevel] = useState('');
  const [error, setError] = useState('');

  const handleCheck = () => {
    setError('');

    if (password === '') {
      setStrength('');
      setStatusMessage('');
      setStrengthLevel('');
      setError('Please enter a password.');
    } else if (password.length < 6) {
      setStrength('Weak Password');
      setStatusMessage(
        'Status: Weak – Create a stronger password.'
      );
      setStrengthLevel('weak');
    } else if (password.length < 10) {
      setStrength('Medium Password');
      setStatusMessage(
        'Status: Weak – Create a stronger password.'
      );
      setStrengthLevel('medium');
    } else {
      setStrength('Strong Password');
      setStatusMessage(
        'Status: Strong – You can use this password.'
      );
      setStrengthLevel('strong');
    }
  };

  const handleClear = () => {
    setPassword('');
    setStrength('');
    setStatusMessage('');
    setStrengthLevel('');
    setError('');
  };

  return (
    <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-indigo-600 px-6 py-5 text-white">
        <h1 className="text-xl font-bold">
          Password Strength Checker
        </h1>

        <p className="mt-1 text-sm text-indigo-100">
          Activity 3
        </p>
      </div>

      <div className="p-6">
        <div>
          <label
            htmlFor="passwordCheck"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <input
            id="passwordCheck"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <p className="mt-2 text-xs text-slate-400">
            Character count: {password.length}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleCheck}
            className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Check Password
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mt-5 rounded-xl border border-red-300 bg-red-50 px-5 py-5">
            <h2 className="text-lg font-bold text-red-700">
              {error}
            </h2>
          </div>
        )}

        {strength && (
          <div
            className={`mt-5 rounded-xl border px-5 py-5 ${
              strengthLevel === 'weak'
                ? 'border-red-300 bg-red-50'
                : strengthLevel === 'medium'
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-emerald-300 bg-emerald-50'
            }`}
          >
            <h2
              className={`text-xl font-bold ${
                strengthLevel === 'weak'
                  ? 'text-red-700'
                  : strengthLevel === 'medium'
                    ? 'text-amber-700'
                    : 'text-emerald-700'
              }`}
            >
              Password Status:{' '}
              {strengthLevel === 'weak'
                ? 'Weak'
                : strengthLevel === 'medium'
                  ? 'Medium'
                  : 'Strong'}
            </h2>

            <p
              className={`mt-2 text-sm font-semibold ${
                strengthLevel === 'weak'
                  ? 'text-red-600'
                  : strengthLevel === 'medium'
                    ? 'text-amber-600'
                    : 'text-emerald-600'
              }`}
            >
              {strength}
            </p>

            <p
              className={`mt-1 text-sm ${
                strengthLevel === 'weak'
                  ? 'text-red-600'
                  : strengthLevel === 'medium'
                    ? 'text-amber-600'
                    : 'text-emerald-600'
              }`}
            >
              {statusMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}