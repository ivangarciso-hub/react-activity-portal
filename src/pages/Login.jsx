import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setMessage('Please enter username and password.');
      return;
    }

    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
  };

  return (
    <div className="card">
      <h2>Activity 1: Login Authentication</h2>
      {isLoggedIn ? (
        <div className="result-panel success">
          <h3>Welcome, {username}!</h3>
          <p>{message}</p>
          <button onClick={handleLogout} className="btn-danger">Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Try: admin" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Try: 1234" />
          </div>
          <button type="submit">Login</button>
          {message && <div className="result-panel error">{message}</div>}
        </form>
      )}
    </div>
  );
}