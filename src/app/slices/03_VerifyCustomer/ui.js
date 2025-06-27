"use client";

import { useState } from "react";
import { useReadModel } from "../../shared/hooks/useReadModel";
import { handleVerifyCustomer } from "./commandHandler";
import "./styles.css";

export default function VerifyCustomerUI() {
  const customers = useReadModel("unverifiedCustomers");
  const [selectedId, setSelectedId] = useState(null);

  const onSubmit = () => {
    if (!selectedId) return;

    handleVerifyCustomer({
      type: "verifyCustomer",
      payload: { id: selectedId },
    });

    setSelectedId(null);
  };

  return (
    <div className="verify-container">
      <h2 className="verify-title">Verify a Customer</h2>

      <select
        className="verify-select"
        value={selectedId || ""}
        onChange={(e) => setSelectedId(parseInt(e.target.value))}
      >
        <option value="">Select a customer</option>
        {customers.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name} (ID: {c.id})
          </option>
        ))}
      </select>

      <button
        className="verify-button"
        onClick={onSubmit}
        disabled={!selectedId}
      >
        Validate Verification
      </button>
    </div>
  );
}