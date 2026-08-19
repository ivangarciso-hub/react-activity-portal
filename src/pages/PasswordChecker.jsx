import React, { useState } from 'react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!password) {
      setError('Please enter a password.');
      return;
    }

    const len = password.length;
    let status = '';
    let message = '';
    let className = '';

    if (len < 6) {
      status = 'Weak Password';
      message = 'Status: Weak – Create a stronger password.';
      className = 'badge-weak';
    } else if (len <= 9) {
      status = 'Medium Password';
      message = 'Status: Weak – Create a stronger password.';
      className = 'badge-medium';
    } else {
      status = 'Strong Password';
      message = 'Status: Strong – You can use this password.';
      className = 'badge-strong';
    }

    setResult({ status, message, className });
  };

  const handleClear = () => {
    setPassword('');
    setResult(null);
    setError('');
  };

  return (
    <div className="card">
      <h2>Activity 3: Password Strength Checker</h2>
      <form onSubmit={handleCheck}>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-group">
          <button type="submit">Check Password</button>
          <button type="button" onClick={handleClear} className="btn-secondary">Clear</button>
        </div>
      </form>
      {error && <div className="result-panel error">{error}</div>}
      {result && (
        <div className="result-panel info">
          <p><strong>Password Status:</strong> <span className={`badge ${result.className}`}>{result.status}</span></p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}