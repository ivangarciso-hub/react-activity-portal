import React from 'react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <h2>React Activity Portal</h2>
      <div className="nav-links">
        <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</button>
        <button className={activePage === 'act1' ? 'active' : ''} onClick={() => setActivePage('act1')}>Activity 1</button>
        <button className={activePage === 'act2' ? 'active' : ''} onClick={() => setActivePage('act2')}>Activity 2</button>
        <button className={activePage === 'act3' ? 'active' : ''} onClick={() => setActivePage('act3')}>Activity 3</button>
        <button className={activePage === 'act4' ? 'active' : ''} onClick={() => setActivePage('act4')}>Activity 4</button>
        <button className={activePage === 'act5' ? 'active' : ''} onClick={() => setActivePage('act5')}>Activity 5</button>
      </div>
    </nav>
  );
}