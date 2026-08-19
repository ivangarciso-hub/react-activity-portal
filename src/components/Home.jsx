import React from 'react';

export default function Home({ setActivePage }) {
  return (
    <div>
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          React Activity Portal
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Activity 1 */}
        <div className="flex min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
            1
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Login Authentication
          </h2>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
            Validate a username and password against sample credentials and
            manage login/logout state.
          </p>

          <button
            type="button"
            onClick={() => setActivePage('act1')}
            className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Open Activity
          </button>
        </div>

        {/* Activity 2 */}
        <div className="flex min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
            2
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Student Grade Evaluation
          </h2>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
            Enter a student's score and get an automatic remark based on
            grade ranges.
          </p>

          <button
            type="button"
            onClick={() => setActivePage('act2')}
            className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Open Activity
          </button>
        </div>

        {/* Activity 3 */}
        <div className="flex min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
            3
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Password Strength Checker
          </h2>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
            Check password length and determine whether the password is weak,
            medium, or strong.
          </p>

          <button
            type="button"
            onClick={() => setActivePage('act3')}
            className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Open Activity
          </button>
        </div>

        {/* Activity 4 */}
        <div className="flex min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
            4
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Electricity Bill Calculator
          </h2>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
            Calculate a customer's electricity bill based on kWh consumption
            and the required rate.
          </p>

          <button
            type="button"
            onClick={() => setActivePage('act4')}
            className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Open Activity
          </button>
        </div>

        {/* Activity 5 */}
        <div className="flex min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
            5
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Employee Attendance Checker
          </h2>

          <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
            Check an employee's time-in and determine their attendance
            status.
          </p>

          <button
            type="button"
            onClick={() => setActivePage('act5')}
            className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Open Activity
          </button>
        </div>
      </div>
    </div>
  );
}