import React, { useState } from "react";

const initialTeam = ["Leo Garcia", "Daniel Hitt", "Maria Lopez"];

export default function TeamManagement() {
  const [team, setTeam] = useState(initialTeam);
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (newMember.trim() && !team.includes(newMember)) {
      setTeam([...team, newMember]);
      setNewMember("");
    }
  };

  const handleRemoveMember = (member) => {
    setTeam(team.filter(m => m !== member));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Team Management</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Add team member"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleAddMember}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {team.map((member, index) => (
          <li key={index} style={{ background: "#eee", padding: "0.5rem", borderRadius: "4px", marginBottom: "0.5rem", display: "flex", justifyContent: "space-between" }}>
            <span>{member}</span>
            <button onClick={() => handleRemoveMember(member)} style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
