import React from 'react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-3 sm:px-6 md:flex-row lg:px-8">
        <button
          type="button"
          onClick={() => setActivePage('home')}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            R
          </span>

          <span className="text-lg font-bold text-slate-900">
            React Activity Portal
          </span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => setActivePage('home')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'home'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => setActivePage('act1')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'act1'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Activity 1
          </button>

          <button
            type="button"
            onClick={() => setActivePage('act2')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'act2'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Activity 2
          </button>

          <button
            type="button"
            onClick={() => setActivePage('act3')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'act3'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Activity 3
          </button>

          <button
            type="button"
            onClick={() => setActivePage('act4')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'act4'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Activity 4
          </button>

          <button
            type="button"
            onClick={() => setActivePage('act5')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activePage === 'act5'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Activity 5
          </button>
        </div>
      </div>
    </nav>
  );
}