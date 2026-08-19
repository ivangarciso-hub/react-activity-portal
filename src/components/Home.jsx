import React from 'react';

export default function Home({ setActivePage }) {
  return (
    <div className="card text-center">
      <h1>Welcome to the React Activity Portal</h1>
      <p>Select an activity from the navigation bar above to start testing.</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        <button onClick={() => setActivePage('act1')}>1. Login Auth</button>
        <button onClick={() => setActivePage('act2')}>2. Grade Eval</button>
        <button onClick={() => setActivePage('act3')}>3. Password Checker</button>
        <button onClick={() => setActivePage('act4')}>4. Electric Bill</button>
        <button onClick={() => setActivePage('act5')}>5. Attendance</button>
      </div>
    </div>
  );
}