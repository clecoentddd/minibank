import React, { useState } from "react";
import { simulateExternalBlacklist } from "./externalInterface";
import "./styles.css";

export default function ExternalBlacklistUI() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      simulateExternalBlacklist(name.trim());
      setName("");
    }
  };

  return (
    <div className="external-blacklist-form">
      <h2>Simulate External Blacklist Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Blacklist</button>
      </form>
    </div>
  );
}