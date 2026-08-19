import React, { useState } from 'react';

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleEvaluate = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!studentName.trim()) {
      setError('Please enter the student name.');
      return;
    }

    if (score === '' || isNaN(score)) {
      setError('Please enter a valid score.');
      return;
    }

    const numericScore = parseFloat(score);

    if (numericScore < 0 || numericScore > 100) {
      setError('Invalid score. Score must be between 0 and 100.');
      return;
    }

    let remarks = '';
    let badgeStyle = '';

    if (numericScore >= 90) {
      remarks = 'Excellent';
      badgeStyle = 'bg-emerald-100 text-emerald-700 border-emerald-200';
    } else if (numericScore >= 85) {
      remarks = 'Very Good';
      badgeStyle = 'bg-blue-100 text-blue-700 border-blue-200';
    } else if (numericScore >= 80) {
      remarks = 'Good';
      badgeStyle = 'bg-indigo-100 text-indigo-700 border-indigo-200';
    } else if (numericScore >= 75) {
      remarks = 'Passed';
      badgeStyle = 'bg-amber-100 text-amber-700 border-amber-200';
    } else {
      remarks = 'Failed';
      badgeStyle = 'bg-rose-100 text-rose-700 border-rose-200';
    }

    setResult({
      name: studentName,
      score: numericScore,
      remarks,
      badgeStyle,
    });
  };

  const handleClear = () => {
    setStudentName('');
    setScore('');
    setResult(null);
    setError('');
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-[#4F39F6] p-6 text-white">
          <h2 className="text-2xl font-bold">Student Grade Evaluation</h2>
          <p className="text-indigo-200 text-sm mt-1">Activity 2</p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <form onSubmit={handleEvaluate} className="space-y-4">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Student Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#4F39F6] focus:ring-2 focus:ring-[#4F39F6]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Score
              </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score (0-100)"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#4F39F6] focus:ring-2 focus:ring-[#4F39F6]/20 outline-none transition-all"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#4F39F6] hover:bg-[#3b27e0] text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Evaluate
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all active:scale-[0.98]"
              >
                Clear
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-xl">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Student:</span>
                <span className="font-semibold text-gray-800">{result.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Score:</span>
                <span className="font-semibold text-gray-800">{result.score} / 100</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200">
                <span className="text-gray-500 font-medium">Remarks:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${result.badgeStyle}`}>
                  {result.remarks}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}