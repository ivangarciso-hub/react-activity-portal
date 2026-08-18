import { useState } from "react";
import "../App.css";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  const checkAttendance = () => {
    if (employeeName.trim() === "" || timeIn === "") {
      setAttendance("Invalid");
      setMessage("Please enter employee name and time in.");
      return;
    }

    const time = Number(timeIn);

    if (time <= 8) {
      setAttendance("On Time");
      setMessage("Status: On Time - Good job!");
    } else if (time <= 9) {
      setAttendance("Late");
      setMessage("Status: Late - Please be on time tomorrow.");
    } else {
      setAttendance("Very Late");
      setMessage("Status: Very Late - Report to your supervisor.");
    }
  };

  const resetAttendance = () => {
    setEmployeeName("");
    setTimeIn("");
    setAttendance("");
    setMessage("");
  };

  return (
    <div className="app-container">
      <div className="attendance-card">
        <h1>Employee Attendance Checker</h1>

        <p className="subtitle">
          Check your attendance status based on your time in.
        </p>

        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-group">
          <label>Time In</label>
          <input
            type="number"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            placeholder="Example: 8.5"
            step="0.1"
          />
        </div>

        <div className="button-group">
          <button
            className="check-button"
            onClick={checkAttendance}
          >
            Check Attendance
          </button>

          <button
            className="reset-button"
            onClick={resetAttendance}
          >
            Reset
          </button>
        </div>

        {attendance && (
          <div className="result-card">
            <h2>Attendance Result</h2>

            <p>
              Employee Name: <strong>{employeeName}</strong>
            </p>

            <p>
              Time In: <strong>{timeIn}</strong>
            </p>

            <p className="status">
              Attendance Status: {attendance}
            </p>

            <p className="message">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AttendanceChecker;