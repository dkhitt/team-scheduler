import React, { useState } from "react";

const days = [
  { name: "Saturday", date: "01/04/2025" },
  { name: "Sunday", date: "01/05/2025" },
  { name: "Monday", date: "01/06/2025" },
  { name: "Tuesday", date: "01/07/2025" },
  { name: "Wednesday", date: "01/08/2025" },
  { name: "Thursday", date: "01/09/2025" },
  { name: "Friday", date: "01/10/2025" }
];

const jobColors = {
  "MILLEMORE SIGMA - 243962": "#FFD700",
  "CAPSTONE AC03 - 233831": "#87CEFA",
  "ASH MULTI BLDG": "#90EE90"
};

const initialJobs = {
  "Leo Garcia": [{ job: "MILLEMORE SIGMA - 243962", time: "7:00 AM - 3:30 PM" }, {}, {}, {}, {}, {}, {}],
  "Daniel Hitt": [{}, {}, { job: "CAPSTONE AC03 - 233831", time: "7:00 AM - 3:30 PM" }, { job: "CAPSTONE AC03 - 233831", time: "7:00 AM - 3:30 PM" }, { job: "CAPSTONE AC03 - 233831", time: "7:00 AM - 3:30 PM" }, { job: "ASH MULTI BLDG", time: "7:00 AM - 3:30 PM" }, { job: "CAPSTONE AC03 - 233831", time: "7:00 AM - 3:30 PM" }],
  "Maria Lopez": [{}, {}, { job: "ASH MULTI BLDG", time: "7:00 AM - 3:30 PM" }, { job: "ASH MULTI BLDG", time: "7:00 AM - 3:30 PM" }, {}, {}, {}]
};

export default function ScheduleGrid() {
  const [team, setTeam] = useState(Object.keys(initialJobs));
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Weekly Team Schedule</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "0.5rem" }}>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>Team Member</div>
        {days.map((day, i) => (
          <div key={i} style={{ textAlign: "center", background: "#eee", padding: "4px", borderRadius: "4px" }}>
            <div>{day.name}</div>
            <div style={{ fontSize: "0.8rem", color: "#555" }}>{day.date}</div>
          </div>
        ))}
        {team.map((member, i) => (
          <React.Fragment key={i}>
            <div style={{ background: "#eee", padding: "4px", textAlign: "center", borderRadius: "4px" }}>
              {member}
            </div>
            {jobs[member].map((entry, j) => (
              <div
                key={j}
                style={{
                  background: jobColors[entry.job] || "#f9f9f9",
                  padding: "4px",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "60px"
                }}
              >
                {entry.job ? (
                  <>
                    <div style={{ fontSize: "0.75rem", fontWeight: "bold" }}>{entry.job}</div>
                    <div style={{ fontSize: "0.7rem" }}>{entry.time}</div>
                  </>
                ) : (
                  <button style={{ fontSize: "0.8rem" }}>+</button>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
