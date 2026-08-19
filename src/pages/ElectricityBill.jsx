import React, { useState } from 'react';

export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState('');
  const [consumption, setConsumption] = useState('');
  const [rate, setRate] = useState(0);
  const [totalBill, setTotalBill] = useState(null);
  const [usageStatus, setUsageStatus] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setRate(0);
    setTotalBill(null);
    setUsageStatus('');

    if (customerName.trim() === '' && consumption === '') {
      setError(
        'Please enter customer name and consumption.'
      );
    } else if (customerName.trim() === '') {
      setError('Please enter customer name.');
    } else if (consumption === '') {
      setError('Please enter consumption.');
    } else {
      const kWh = Number(consumption);

      if (Number.isNaN(kWh)) {
        setError(
          'Please enter a valid consumption value.'
        );
      } else if (kWh < 0) {
        setError('Consumption cannot be negative.');
      } else {
        let appliedRate = 0;

        if (kWh <= 100) {
          appliedRate = 10;
        } else if (kWh <= 200) {
          appliedRate = 12;
        } else if (kWh <= 300) {
          appliedRate = 15;
        } else {
          appliedRate = 18;
        }

        const bill = kWh * appliedRate;
        let status = '';

        if (bill >= 5000) {
          status = 'High Electricity Usage';
        } else {
          status = 'Normal Electricity Usage';
        }

        setRate(appliedRate);
        setTotalBill(bill);
        setUsageStatus(status);
      }
    }
  };

  const handleClear = () => {
    setCustomerName('');
    setConsumption('');
    setRate(0);
    setTotalBill(null);
    setUsageStatus('');
    setError('');
  };

  return (
    <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-indigo-600 px-6 py-5 text-white">
        <h1 className="text-xl font-bold">
          Electricity Bill Calculator
        </h1>

        <p className="mt-1 text-sm text-indigo-100">
          Activity 4
        </p>
      </div>

      <div className="p-6">
        <div className="mb-5">
          <label
            htmlFor="customerName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Customer Name
          </label>

          <input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) =>
              setCustomerName(e.target.value)
            }
            placeholder="Enter customer name"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="consumption"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Electricity Consumption (kWh)
          </label>

          <input
            id="consumption"
            type="number"
            value={consumption}
            onChange={(e) =>
              setConsumption(e.target.value)
            }
            placeholder="Enter consumption in kWh"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleCalculate}
            className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Calculate Bill
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
          <div className="mt-5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {totalBill !== null && (
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <div className="bg-slate-50 px-5 py-3">
              <div className="flex items-center justify-between gap-4 py-2">
                <span className="text-sm text-slate-500">
                  Customer Name
                </span>

                <strong className="text-sm text-slate-900">
                  {customerName.trim()}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <span className="text-sm text-slate-500">
                  Consumption
                </span>

                <strong className="text-sm text-slate-900">
                  {Number(consumption)} kWh
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <span className="text-sm text-slate-500">
                  Rate
                </span>

                <strong className="text-sm text-slate-900">
                  ₱{rate} / kWh
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <span className="text-sm text-slate-500">
                  Total Bill
                </span>

                <strong className="text-lg font-bold text-indigo-600">
                  ₱{totalBill.toFixed(2)}
                </strong>
              </div>
            </div>

            <div
              className={`px-4 py-4 text-center text-sm font-bold ${
                usageStatus ===
                'High Electricity Usage'
                  ? 'bg-red-50 text-red-700'
                  : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              {usageStatus}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}