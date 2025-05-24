import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScheduleGrid from "./ScheduleGrid";
import TeamManagement from "./TeamManagement";

export default function App() {
  return (
    <Router>
      <div className="p-4 space-y-4">
        <nav className="flex gap-4 mb-4">
          <Link to="/">Schedule</Link>
          <Link to="/team">Team Management</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ScheduleGrid />} />
          <Route path="/team" element={<TeamManagement />} />
        </Routes>
      </div>
    </Router>
  );
}
