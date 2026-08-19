import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './pages/Login';
import GradeEvaluation from './pages/GradeEvaluation';
import PasswordChecker from './pages/PasswordChecker';
import ElectricityBill from './pages/ElectricityBill';
import AttendanceChecker from './pages/AttendanceChecker';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'act1':
        return <Login />;
      case 'act2':
        return <GradeEvaluation />;
      case 'act3':
        return <PasswordChecker />;
      case 'act4':
        return <ElectricityBill />;
      case 'act5':
        return <AttendanceChecker />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
    </div>
  );
}